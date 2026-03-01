const PDFJS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
const API_ENDPOINT = "/api/extract";
const API_TIMEOUT_MS = 25000;

let pdfjsReady = false;

function loadPDFJS() {
    return new Promise((resolve, reject) => {
        if (pdfjsReady) { resolve(); return; }
        const script = document.createElement("script");
        script.src = PDFJS_CDN;
        script.onload = () => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
            pdfjsReady = true;
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function readPDF(file) {
    await loadPDFJS();
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        fullText += content.items.map(item => item.str).join(" ") + "\n";
    }
    return fullText;
}

async function readText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

async function callExtractAPI(text) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), API_TIMEOUT_MS);
    try {
        const resp = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
            signal: controller.signal,
        });
        clearTimeout(timer);
        if (!resp.ok) return null;
        return await resp.json();
    } catch (e) {
        clearTimeout(timer);
        return null;
    }
}

function mergeAPIResult(data, apiResult) {
    if (!apiResult) return;

    if (apiResult.name && !data.name) data.name = apiResult.name;

    if (apiResult.location && !data.contact.location) {
        data.contact.location = apiResult.location;
    }

    if (Array.isArray(apiResult.skills) && apiResult.skills.length > 0) {
        const existing = new Set(data.skills.technical.map(s => s.toLowerCase()));
        for (const skill of apiResult.skills) {
            if (!existing.has(skill.toLowerCase())) {
                data.skills.technical.unshift(skill);
                existing.add(skill.toLowerCase());
            }
        }
    }

    if (Array.isArray(apiResult.organizations) && apiResult.organizations.length > 0) {
        data._organizations = apiResult.organizations;
    }
}

async function processFile(file, onProgress) {
    const ext = file.name.split(".").pop().toLowerCase();
    let rawText = "";

    onProgress("Reading file…");
    if (ext === "pdf") {
        rawText = await readPDF(file);
    } else {
        rawText = await readText(file);
    }

    onProgress("Extracting sections…");
    await delay(300);

    const data = CVExtractor.extractCV(rawText);
    data._rawText = rawText;
    data._fileName = file.name;

    onProgress("Running NLP analysis…");
    const apiResult = await callExtractAPI(rawText);
    mergeAPIResult(data, apiResult);

    if (!apiResult) {
        console.info("API unavailable — using client-side NLP.");
    }

    onProgress("Organising results…");
    await delay(200);

    sessionStorage.setItem("cvData", JSON.stringify(data));
    window.location.href = "result.html";
}

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

window.CVParser = { processFile };
