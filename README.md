# parsed

a browser-based cv reader. upload a resume as a pdf or text file and get a structured breakdown of the content — no server, no api, no data leaves your machine.

---

## what it does

- extracts contact info, summary, work experience, education, skills, projects, certifications and languages from a cv
- matches against a list of 500+ technical and soft skills
- works entirely client-side using pdf.js for pdf parsing
- two pages: an upload page and a results page

## how to use

clone or download the repo, then open `index.html` in a browser. that's it.

```
git clone https://github.com/yourname/parsed.git
cd parsed
open index.html
```

no build step, no dependencies to install.

## supported formats

- pdf
- plain text (.txt)

## project structure

```
parsed/
├── index.html
├── result.html
├── css/
│   └── style.css
├── js/
│   ├── extractor.js   skill and section extraction logic
│   ├── parser.js      file reading and pdf.js integration
│   └── ui.js          renders results into result.html
└── sample_cv.txt      a sample cv for testing
```

## notes

- pdf parsing quality depends on how the pdf was exported. text-based pdfs work well; scanned image pdfs won't work.
- skill matching is keyword-based, not ai. it looks for known terms in the raw text.
- the parser uses heuristics to detect section boundaries, so unusual cv formats may produce incomplete results.

## license

mit
