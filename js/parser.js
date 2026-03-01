const PDFJS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

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
        const pageText = content.items.map(item => item.str).join(" ");
        fullText += pageText + "\n";
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

async function processFile(file, onProgress) {
    let rawText = "";
    const ext = file.name.split(".").pop().toLowerCase();

    onProgress("Reading file…");
    if (ext === "pdf") {
        rawText = await readPDF(file);
    } else {
        rawText = await readText(file);
    }

    onProgress("Extracting sections…");
    await delay(400);

    const data = CVExtractor.extractCV(rawText);
    data._rawText = rawText;
    data._fileName = file.name;

    onProgress("Organising results…");
    await delay(300);

    sessionStorage.setItem("cvData", JSON.stringify(data));
    window.location.href = "result.html";
}

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

window.CVParser = { processFile };
