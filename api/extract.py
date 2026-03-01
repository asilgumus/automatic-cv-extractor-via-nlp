from http.server import BaseHTTPRequestHandler
import json
import os

_nlp = None

def load_model():
    global _nlp
    if _nlp is not None:
        return _nlp
    from huggingface_hub import snapshot_download
    import spacy
    model_path = snapshot_download("amjad-awad/skill-extractor", repo_type="model")
    _nlp = spacy.load(model_path)
    return _nlp


def extract_nlp(text):
    nlp = load_model()
    doc = nlp(text[:50000])

    skills = []
    seen = set()
    for ent in doc.ents:
        if "SKILL" in ent.label_:
            val = ent.text.strip()
            key = val.lower()
            if key and key not in seen:
                seen.add(key)
                skills.append(val)

    name = ""
    location = ""
    organizations = []
    org_seen = set()

    for ent in doc.ents:
        label = ent.label_
        val = ent.text.strip()
        if label == "PERSON" and not name and len(val.split()) >= 2:
            name = val
        elif label in ("GPE", "LOC") and not location and len(val) < 60:
            location = val
        elif label == "ORG" and val.lower() not in org_seen:
            org_seen.add(val.lower())
            organizations.append(val)

    return {
        "name": name,
        "location": location,
        "organizations": organizations,
        "skills": skills,
    }


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            body = json.loads(self.rfile.read(length))
            text = body.get("text", "")

            if not text.strip():
                self._respond(400, {"error": "no text provided"})
                return

            result = extract_nlp(text)
            self._respond(200, result)

        except Exception as e:
            self._respond(500, {"error": str(e)})

    def _respond(self, code, data):
        payload = json.dumps(data).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, *args):
        pass
