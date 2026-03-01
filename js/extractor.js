const SKILL_KEYWORDS = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "C", "Go", "Rust", "Swift",
  "Kotlin", "Ruby", "PHP", "Scala", "R", "MATLAB", "Perl", "Bash", "Shell", "PowerShell",
  "Dart", "Elixir", "Haskell", "Lua", "Objective-C", "Assembly", "COBOL", "Fortran",
  "HTML", "CSS", "HTML5", "CSS3", "React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt.js",
  "jQuery", "Bootstrap", "Tailwind CSS", "Sass", "SCSS", "Less", "Webpack", "Vite", "Parcel",
  "Redux", "Zustand", "MobX", "GraphQL", "REST", "AJAX", "WebSockets", "WebGL", "Three.js",
  "Node.js", "Express", "Express.js", "Django", "Flask", "FastAPI", "Spring", "Spring Boot",
  "Laravel", "Ruby on Rails", "Rails", "ASP.NET", ".NET", "NestJS", "Koa", "Hapi", "Fastify",
  "Gin", "Echo", "Fiber", "Actix", "Rocket",
  "SQL", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Cassandra", "DynamoDB",
  "Elasticsearch", "Neo4j", "MariaDB", "Oracle", "MS SQL", "Firebase", "Firestore",
  "Supabase", "PlanetScale", "CockroachDB", "InfluxDB", "RabbitMQ", "Kafka",
  "AWS", "Azure", "GCP", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible",
  "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Helm",
  "Nginx", "Apache", "Linux", "Ubuntu", "Debian", "CentOS", "Prometheus", "Grafana",
  "Datadog", "Splunk", "New Relic", "ELK Stack", "Vagrant", "Pulumi", "CloudFormation",
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch",
  "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV",
  "Hugging Face", "LangChain", "Transformers", "BERT", "GPT", "YOLO", "XGBoost",
  "LightGBM", "CatBoost", "Spark", "PySpark", "Hadoop", "Airflow", "MLflow", "DVC",
  "Android", "iOS", "React Native", "Flutter", "Xamarin", "Ionic", "SwiftUI",
  "Jetpack Compose", "Expo",
  "Git", "GitHub", "GitLab", "Bitbucket", "JIRA", "Confluence", "Trello", "Figma", "Sketch",
  "Postman", "Insomnia", "Swagger", "OpenAPI", "gRPC", "OAuth", "JWT", "LDAP",
  "WebRTC", "MQTT", "Tableau", "Power BI", "Looker", "Metabase",
  "Jest", "Mocha", "Chai", "Cypress", "Playwright", "Selenium", "PyTest",
  "JUnit", "TestNG", "Vitest", "Testing Library", "Jasmine", "Karma",
  "Agile", "Scrum", "Kanban", "SAFe", "CI/CD", "DevOps", "DevSecOps", "TDD", "BDD", "DDD",
  "Microservices", "Serverless", "Event-Driven", "SOA", "SOLID", "REST API",
  "MVC", "MVVM", "Design Patterns", "System Design",
  "Cybersecurity", "Penetration Testing", "OWASP", "SSL", "TLS", "Cryptography",
  "IAM", "SIEM", "Okta", "Auth0", "Keycloak",
  "TCP/IP", "HTTP", "HTTPS", "DNS", "VPN", "Load Balancing", "CDN", "HAProxy",
  "ETL", "Data Engineering", "Snowflake", "BigQuery", "Redshift", "dbt", "Excel",
];

const SOFT_SKILLS_LIST = [
  "leadership", "team leadership", "communication", "problem solving", "problem-solving",
  "analytical thinking", "critical thinking", "time management", "project management",
  "collaboration", "teamwork", "mentoring", "coaching", "public speaking", "presentation",
  "negotiation", "conflict resolution", "adaptability", "creativity", "innovation",
  "attention to detail", "organization", "planning", "decision making", "decision-making",
  "cross-functional", "stakeholder management", "client facing", "client-facing",
];

const KNOWN_LANGUAGES = [
  "English", "French", "German", "Spanish", "Turkish", "Arabic", "Chinese", "Japanese",
  "Korean", "Italian", "Portuguese", "Russian", "Dutch", "Swedish", "Polish", "Hindi",
  "Mandarin", "Cantonese", "Farsi", "Persian", "Greek", "Hebrew", "Czech", "Romanian",
  "Hungarian", "Finnish", "Norwegian", "Danish", "Ukrainian",
];

const SECTION_PATTERNS = {
  contact: /^(contact|personal\s+info(rmation)?|personal\s+details?)\s*:?\s*$/i,
  summary: /^(summary|profile|professional\s+summary|about\s+me|objective|career\s+objective|overview)\s*:?\s*$/i,
  experience: /^(experience|work\s+experience|employment|professional\s+experience|career|work\s+history|positions?)\s*:?\s*$/i,
  education: /^(education|academic|qualifications?|degrees?|schooling|academic\s+background)\s*:?\s*$/i,
  skills: /^(skills?|technical\s+skills?|core\s+competencies|competencies|expertise|technologies|tools)\s*:?\s*$/i,
  soft_skills: /^(soft\s+skills?|interpersonal\s+skills?|personal\s+attributes?)\s*:?\s*$/i,
  projects: /^(projects?|personal\s+projects?|side\s+projects?|portfolio)\s*:?\s*$/i,
  certifications: /^(certifications?|certificates?|licenses?|credentials?|accreditations?)\s*:?\s*$/i,
  awards: /^(awards?|honors?|honours?|achievements?|recognition)\s*:?\s*$/i,
  languages: /^(languages?|language\s+skills?)\s*:?\s*$/i,
  references: /^(references?|referees?)\s*:?\s*$/i,
};

const CONTACT_PATTERNS = {
  email: /\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Z|a-z]{2,}\b/,
  phone: /(\+?\d[\d\s\-().]{7,}\d)/,
  linkedin: /(?:linkedin\.com\/in\/|linkedin:\s*)([A-Za-z0-9\-_]+)/i,
  github: /(?:github\.com\/|github:\s*)([A-Za-z0-9\-_]+)/i,
  location: /\b([A-Z][a-z]+(?:\s[A-Z][a-z]+)*),\s*([A-Z]{2}|[A-Za-z]+)\b/,
};

const SKILL_CONTEXT_PATTERNS = [
  /\busing\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bwith\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bbuilt\s+(?:with|in|on|using)\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bproficient\s+in\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bexperience\s+(?:with|in)\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bexpertise\s+in\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bknowledge\s+of\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bdeployed\s+(?:to|on|with)\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bintegrated\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
  /\bimplemented\s+(?:\w+\s+){0,3}(?:using|with|in)\s+([A-Z][\w.+#\-]+(?:\s+[\w.+#\-]+){0,2})/gi,
];

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "for", "on", "at", "by", "with", "from", "is", "are", "was",
  "were", "be", "been", "has", "have", "had", "will", "would", "may", "can", "could", "should", "must",
  "also", "that", "this", "which", "we", "i", "they", "it", "as", "but", "if", "not", "so", "do", "our",
  "their", "your", "all", "more", "new", "other", "some", "any", "such", "each", "both", "between",
  "through", "during", "before", "after", "above", "below", "than", "then", "when", "where", "how",
  "about", "against", "into", "over", "under", "within", "without", "including", "based", "related",
  "following", "various", "multiple", "different", "specific", "current", "previous", "next",
  "first", "second", "third", "last", "large", "small", "high", "low", "full", "good", "best",
  "strong", "key", "main", "major", "senior", "junior", "lead", "staff", "cross", "end", "side", "web",
  "systems", "system", "services", "service", "development", "solutions", "applications", "ability",
  "skills", "team", "work", "working", "used", "use", "using", "ensuring", "including", "across",
  "improved", "increased", "reduced", "created", "designed", "developed", "built", "wrote", "managed",
]);

function extractCV(rawText) {
  const nlpReady = typeof nlp !== "undefined";
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const sections = splitIntoSections(lines);

  const name = nlpReady ? extractNameNLP(rawText, lines) : guessNameFallback(lines);
  const contact = extractContact(rawText, nlpReady);
  const summary = (sections.summary || []).join(" ").trim();
  const experience = parseExperience(sections.experience || [], nlpReady);
  const education = parseEducation(sections.education || []);
  const skillLines = [...(sections.skills || []), ...(sections.soft_skills || [])];
  const skills = extractSkillsNLP(rawText, sections.skills || [], sections.soft_skills || [], nlpReady);
  const projects = parseListSection(sections.projects || []);
  const certifications = parseListSection(sections.certifications || []);
  const languages = extractLanguages(rawText, sections.languages || []);

  return { name, contact, summary, experience, education, skills, projects, certifications, languages };
}

function extractNameNLP(rawText, lines) {
  try {
    const firstBlock = rawText.slice(0, 300);
    const doc = nlp(firstBlock);
    const people = doc.people().out("array");
    if (people.length > 0) {
      const name = people[0].trim();
      if (name.split(" ").length >= 2 && name.length < 50) return toTitleCase(name);
    }
  } catch (e) { }
  return guessNameFallback(lines);
}

function guessNameFallback(lines) {
  for (const line of lines.slice(0, 5)) {
    if (line.includes("@") || line.includes(":") || line.includes("http")) continue;
    if (/^\+?\d/.test(line)) continue;
    const words = line.split(/\s+/);
    if (words.length >= 2 && words.length <= 5 && words.every(w => /^[A-ZÀ-Ö]/.test(w))) return line;
  }
  return lines[0] || "";
}

function splitIntoSections(lines) {
  const sections = {};
  let current = null;
  let buffer = [];
  const flush = () => {
    if (current && buffer.length) sections[current] = [...(sections[current] || []), ...buffer];
    buffer = [];
  };
  for (const line of lines) {
    let matched = false;
    for (const [key, pattern] of Object.entries(SECTION_PATTERNS)) {
      if (pattern.test(line)) { flush(); current = key; matched = true; break; }
    }
    if (!matched && current) buffer.push(line);
  }
  flush();
  return sections;
}

function extractContact(rawText, nlpReady) {
  const contact = {};

  const emailM = rawText.match(CONTACT_PATTERNS.email);
  if (emailM) contact.email = emailM[0];

  const phoneM = rawText.match(CONTACT_PATTERNS.phone);
  if (phoneM) contact.phone = phoneM[1].trim();

  const linkedinM = rawText.match(CONTACT_PATTERNS.linkedin);
  if (linkedinM) contact.linkedin = `linkedin.com/in/${linkedinM[1]}`;

  const githubM = rawText.match(CONTACT_PATTERNS.github);
  if (githubM) contact.github = `github.com/${githubM[1]}`;

  const urls = [...rawText.matchAll(/https?:\/\/[^\s)>,]+/gi)];
  for (const m of urls) {
    const u = m[0];
    if (!u.includes("linkedin") && !u.includes("github")) { contact.website = u; break; }
  }

  if (nlpReady) {
    try {
      const firstBlock = rawText.slice(0, 400);
      const doc = nlp(firstBlock);
      const places = doc.places().out("array");
      const validPlace = places.find(p =>
        p.length < 50 &&
        /^[A-Z]/.test(p) &&
        !/^(email|phone|linkedin|github|website|language)/i.test(p) &&
        p.split(" ").length <= 5
      );
      if (validPlace) contact.location = validPlace;
    } catch (e) { }
  }

  if (!contact.location) {
    const locM = rawText.match(CONTACT_PATTERNS.location);
    if (locM && locM[0].length < 50) contact.location = locM[0];
  }

  return contact;
}

function extractSkillsNLP(rawText, skillSectionLines, softSectionLines, nlpReady) {
  const scores = new Map();

  const softLower = new Set(SOFT_SKILLS_LIST.map(s => s.toLowerCase()));
  const langLower = new Set(KNOWN_LANGUAGES.map(l => l.toLowerCase()));

  const isValidSkill = (term) => {
    const t = term.trim();
    if (t.length < 2 || t.length > 50) return false;
    if (/[.,!?;]$/.test(t)) return false;
    if (/ (and|or|to|with|for|of|in|by|from|the|a|an) /i.test(t)) return false;
    if (/ (and|or|to|with)$/i.test(t)) return false;
    if (/^(and|or|to|with|for|the|a|an) /i.test(t)) return false;
    if (t.split(' ').length > 4) return false;
    if (STOP_WORDS.has(t.toLowerCase())) return false;
    if (softLower.has(t.toLowerCase())) return false;
    if (langLower.has(t.toLowerCase())) return false;
    return true;
  };

  const add = (term, score) => {
    const key = term.trim().replace(/[.,!?;]+$/, '');
    if (!isValidSkill(key)) return;
    scores.set(key, (scores.get(key) || 0) + score);
  };

  if (nlpReady) {
    try {
      const doc = nlp(rawText);

      doc.nouns().out("array").forEach(n => {
        const t = n.trim();
        if (/^[A-Z]/.test(t) || /[.#+]/.test(t)) add(t, 1);
      });

      doc.match("#Acronym+").out("array").forEach(t => add(t.trim(), 2));

      doc.match("(#Noun|#Acronym) (#Noun|#Acronym)+").out("array").forEach(t => {
        const clean = t.trim();
        if (/^[A-Z]/.test(clean)) add(clean, 2);
      });

      const contextSentences = doc.sentences()
        .filter(s => /(using|built with|proficient|experience with|expertise in|knowledge of|integrated|deployed|implemented)/i.test(s.text()))
        .out("array");

      contextSentences.forEach(sent => {
        const sentDoc = nlp(sent);
        sentDoc.match("(#Noun|#Acronym)+").out("array").forEach(t => {
          const clean = t.trim();
          if (/^[A-Z]/.test(clean)) add(clean, 2);
        });
      });

    } catch (e) { }
  }

  SKILL_CONTEXT_PATTERNS.forEach(re => {
    let m;
    const regex = new RegExp(re.source, re.flags);
    while ((m = regex.exec(rawText)) !== null) add(m[1].trim(), 2);
  });

  skillSectionLines.forEach(line => {
    line.split(/[,;•·|\/\n]/).forEach(part => {
      const cleaned = part.trim().replace(/^[-•*\s\d.]+/, "").trim();
      if (cleaned.length >= 2 && cleaned.length <= 50) add(cleaned, 3);
    });
  });

  SKILL_KEYWORDS.forEach(skill => {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, "i");
    if (re.test(rawText)) add(skill, 3);
  });

  const technical = [];
  const rawScores = [...scores.entries()].sort((a, b) => b[1] - a[1]);

  for (const [term, score] of rawScores) {
    if (score < 2) continue;
    const lower = term.toLowerCase();
    if (STOP_WORDS.has(lower)) continue;
    if (/^\d+$/.test(term)) continue;
    const isDuplicate = technical.some(t => t.toLowerCase() === lower);
    if (!isDuplicate) technical.push(term);
  }

  const soft = [];
  const softSearchText = rawText + " " + (softSectionLines || []).join(" ");
  const softSeen = new Set();
  SOFT_SKILLS_LIST.forEach(skill => {
    if (new RegExp(`\\b${skill}\\b`, "i").test(softSearchText)) {
      const tc = toTitleCase(skill);
      if (!softSeen.has(tc.toLowerCase())) { softSeen.add(tc.toLowerCase()); soft.push(tc); }
    }
  });

  return { technical, soft };
}

function extractLanguages(rawText, langSectionLines) {
  const found = new Set();
  const searchText = rawText + " " + langSectionLines.join(" ");
  KNOWN_LANGUAGES.forEach(lang => {
    if (new RegExp(`\\b${lang}\\b`, "i").test(searchText)) found.add(lang);
  });
  return [...found];
}

function parseExperience(lines, nlpReady) {
  const entries = [];
  let current = null;
  const dateRange = /(\d{4}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^\n–\-—]*[\-–—][^\n]*(\d{4}|present|current|now)/i;

  const isOrgLine = (line) => {
    if (line.length > 120) return false;
    if (/,\s*(LLC|Inc|Ltd|Corp|Co\.|Technologies|Solutions|Group|Agency|Studio|Labs|GmbH|S\.A\.|PLC)/i.test(line)) return true;
    if (dateRange.test(line)) return true;
    if (/\|\s*/.test(line) && line.length < 80) return true;
    if (nlpReady) {
      try {
        const orgs = nlp(line).organizations().out("array");
        if (orgs.length > 0 && line.length < 100) return true;
      } catch (e) { }
    }
    return false;
  };

  for (const line of lines) {
    const looksLikeHeader = isOrgLine(line);
    if (looksLikeHeader) {
      if (current) entries.push(current);
      const dateM = line.match(/\(?((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?\s*\d{4}\s*[\-–—]\s*(?:\d{4}|present|current|now))\)?/i);
      const dates = dateM ? dateM[1] : "";
      const rest = line.replace(dateM ? dateM[0] : "", "").trim();
      const parts = rest.split(/\s*[\|@]\s*|\s+at\s+/i);
      current = { title: parts[0]?.trim() || rest, company: parts[1]?.trim() || "", dates, bullets: [] };
    } else if (current && /^[\-•*▸►>]/.test(line)) {
      current.bullets.push(line.replace(/^[\-•*▸►>\s]+/, "").trim());
    } else if (current) {
      if (current.bullets.length === 0 && !current.company && line.length < 80) current.company = line;
      else current.bullets.push(line.replace(/^[\-•*▸►>\s]+/, "").trim());
    }
  }
  if (current) entries.push(current);
  return entries;
}

function parseEducation(lines) {
  const entries = [];
  let current = null;
  const degreeKeywords = /\b(B\.?Sc?|M\.?Sc?|M\.?Eng|M\.?B\.?A|Ph\.?D|Bachelor|Master|Doctor|Associate|Diploma|Certificate|B\.?A|M\.?A|B\.?Tech|M\.?Tech|LLB|LLM|MBA)\b/i;
  const dateRange = /(\d{4})[^\d]*(\d{4}|present|current|now)/i;
  for (const line of lines) {
    if (degreeKeywords.test(line) || dateRange.test(line)) {
      if (current) entries.push(current);
      const dateM = line.match(/\(?((?:\d{4})\s*[\-–—]\s*(?:\d{4}|present|current|now))\)?/i);
      const dates = dateM ? dateM[1] : "";
      const rest = line.replace(dateM ? dateM[0] : "", "").trim();
      const parts = rest.split(/\s*[,|@]\s*|\s+at\s+/i);
      current = { degree: parts[0]?.trim() || rest, school: parts[1]?.trim() || "", dates, details: [] };
    } else if (current) {
      if (!current.school && line.length < 100) current.school = line;
      else current.details.push(line);
    }
  }
  if (current) entries.push(current);
  return entries;
}

function parseListSection(lines) {
  return lines.map(l => l.replace(/^[\-•*▸►>\d.]\s*/, "").trim()).filter(l => l.length > 3);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1));
}

window.CVExtractor = { extractCV };
