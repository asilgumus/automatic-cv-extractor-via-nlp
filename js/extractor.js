const TECHNICAL_SKILLS = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "C", "Go", "Rust", "Swift",
  "Kotlin", "Ruby", "PHP", "Scala", "R", "MATLAB", "Perl", "Bash", "Shell", "PowerShell",
  "Dart", "Elixir", "Haskell", "Lua", "Objective-C", "Assembly", "COBOL", "Fortran",
  "HTML", "CSS", "HTML5", "CSS3", "React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt.js",
  "jQuery", "Bootstrap", "Tailwind CSS", "Sass", "SCSS", "Less", "Webpack", "Vite", "Parcel",
  "Redux", "Zustand", "MobX", "GraphQL", "REST", "AJAX", "WebSockets", "WebGL", "Three.js",
  "Node.js", "Express", "Express.js", "Django", "Flask", "FastAPI", "Spring", "Spring Boot",
  "Laravel", "Ruby on Rails", "Rails", "ASP.NET", ".NET", "Nest.js", "NestJS", "Koa",
  "Hapi", "Fastify", "Gin", "Echo", "Fiber", "Actix", "Rocket",
  "SQL", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Cassandra", "DynamoDB",
  "Elasticsearch", "Neo4j", "MariaDB", "Oracle", "MS SQL", "Firebase", "Firestore",
  "Supabase", "PlanetScale", "CockroachDB", "InfluxDB", "RabbitMQ", "Kafka",
  "AWS", "Azure", "GCP", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Ansible",
  "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Helm",
  "Nginx", "Apache", "Linux", "Ubuntu", "Debian", "CentOS", "Prometheus", "Grafana",
  "Datadog", "Splunk", "New Relic", "ELK Stack", "Vagrant", "Pulumi", "CloudFormation",
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch",
  "Keras", "Scikit-learn", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "OpenCV", "Hugging Face", "LangChain", "Transformers", "BERT", "GPT", "YOLO", "XGBoost",
  "LightGBM", "CatBoost", "Spark", "PySpark", "Hadoop", "Airflow", "MLflow", "DVC",
  "Android", "iOS", "React Native", "Flutter", "Xamarin", "Ionic", "Swift UI", "SwiftUI",
  "Jetpack Compose", "Expo",
  "Git", "GitHub", "GitLab", "Bitbucket", "JIRA", "Confluence", "Trello", "Figma", "Sketch",
  "Postman", "Insomnia", "Swagger", "OpenAPI", "gRPC", "GraphQL", "OAuth", "JWT", "LDAP",
  "WebRTC", "MQTT", "Tableau", "Power BI", "Looker", "Metabase", "Datadog",
  "Jest", "Mocha", "Chai", "Cypress", "Playwright", "Selenium", "PyTest", "pytest",
  "JUnit", "TestNG", "Vitest", "Testing Library", "Jasmine", "Karma",
  "Agile", "Scrum", "Kanban", "SAFe", "CICD", "CI/CD", "DevOps", "DevSecOps", "TDD",
  "BDD", "DDD", "Microservices", "Serverless", "Event-Driven", "SOA", "SOLID", "REST API",
  "API", "MVC", "MVVM", "Design Patterns", "System Design", "Architecture",
  "Cybersecurity", "Penetration Testing", "OWASP", "SSL", "TLS", "Cryptography",
  "IAM", "SIEM", "Okta", "Auth0", "Keycloak", "FirebaseAuth",
  "TCP/IP", "HTTP", "HTTPS", "DNS", "VPN", "Load Balancing", "CDN", "Nginx", "HAProxy",
  "ETL", "Data Engineering", "Data Pipelines", "Snowflake", "BigQuery", "Redshift",
  "dbt", "Looker", "Power BI", "Tableau", "Excel", "Google Sheets",
];

const SOFT_SKILLS = [
  "leadership", "team leadership", "communication", "problem solving", "problem-solving",
  "analytical thinking", "critical thinking", "time management", "project management",
  "collaboration", "teamwork", "mentoring", "coaching", "public speaking", "presentation",
  "negotiation", "conflict resolution", "adaptability", "creativity", "innovation",
  "attention to detail", "organization", "planning", "decision making", "decision-making",
  "cross-functional", "stakeholder management", "client facing", "client-facing",
];

const LANGUAGES = [
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
  projects: /^(projects?|personal\s+projects?|side\s+projects?|portfolio)\s*:?\s*$/i,
  certifications: /^(certifications?|certificates?|licenses?|credentials?|accreditations?)\s*:?\s*$/i,
  awards: /^(awards?|honors?|honours?|achievements?|recognition)\s*:?\s*$/i,
  publications: /^(publications?|papers?|research|articles?)\s*:?\s*$/i,
  volunteering: /^(volunteering?|volunteer\s+experience|community|social)\s*:?\s*$/i,
  interests: /^(interests?|hobbies|activities|extra.?curricular)\s*:?\s*$/i,
  languages: /^(languages?|language\s+skills?)\s*:?\s*$/i,
  references: /^(references?|referees?)\s*:?\s*$/i,
};

const CONTACT_PATTERNS = {
  email: /\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Z|a-z]{2,}\b/,
  phone: /(\+?\d[\d\s\-().]{7,}\d)/,
  linkedin: /(?:linkedin\.com\/in\/|linkedin:\s*)([A-Za-z0-9\-_]+)/i,
  github: /(?:github\.com\/|github:\s*)([A-Za-z0-9\-_]+)/i,
  website: /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9\-]+\.[a-zA-Z]{2,})(?:\/[^\s]*)?\b/,
  location: /\b([A-Z][a-z]+(?:\s[A-Z][a-z]+)*),\s*([A-Z]{2}|[A-Za-z]+)(?:,\s*[A-Za-z\s]+)?\b/,
};

function extractCV(rawText) {
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  const name = guessName(lines);
  const sections = splitIntoSections(lines);
  const contact = extractContact(rawText, name);

  const summary = sections.summary
    ? sections.summary.join(" ").trim()
    : "";

  const experience = parseExperience(sections.experience || []);
  const education = parseEducation(sections.education || []);
  const skills = extractSkills(rawText, sections.skills || []);
  const projects = parseListSection(sections.projects || []);
  const certifications = parseListSection(sections.certifications || []);
  const detectedLangs = extractLanguages(rawText, sections.languages || []);

  return {
    name,
    contact,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
    languages: detectedLangs,
  };
}

function guessName(lines) {
  for (const line of lines.slice(0, 5)) {
    if (line.includes("@") || line.includes(":") || line.includes("http")) continue;
    if (/^\+?\d/.test(line)) continue;
    const words = line.split(/\s+/);
    if (words.length >= 2 && words.length <= 5 && words.every(w => /^[A-ZÀ-Ö]/.test(w) || /^[a-záàä]/.test(w))) {
      return line;
    }
  }
  return lines[0] || "";
}

function splitIntoSections(lines) {
  const sections = {};
  let currentSection = null;
  let buffer = [];

  const flush = () => {
    if (currentSection && buffer.length) {
      sections[currentSection] = [...(sections[currentSection] || []), ...buffer];
    }
    buffer = [];
  };

  for (const line of lines) {
    let matched = false;
    for (const [key, pattern] of Object.entries(SECTION_PATTERNS)) {
      if (pattern.test(line)) {
        flush();
        currentSection = key;
        matched = true;
        break;
      }
    }
    if (!matched && currentSection) {
      buffer.push(line);
    }
  }
  flush();
  return sections;
}

function extractContact(text, name) {
  const contact = {};

  const emailMatch = text.match(CONTACT_PATTERNS.email);
  if (emailMatch) contact.email = emailMatch[0];

  const phoneMatch = text.match(CONTACT_PATTERNS.phone);
  if (phoneMatch) contact.phone = phoneMatch[1].trim();

  const linkedinMatch = text.match(CONTACT_PATTERNS.linkedin);
  if (linkedinMatch) contact.linkedin = `linkedin.com/in/${linkedinMatch[1]}`;

  const githubMatch = text.match(CONTACT_PATTERNS.github);
  if (githubMatch) contact.github = `github.com/${githubMatch[1]}`;

  const urlMatches = [...text.matchAll(/https?:\/\/[^\s)>,]+/gi)];
  for (const m of urlMatches) {
    const u = m[0];
    if (!u.includes("linkedin") && !u.includes("github")) {
      contact.website = u;
      break;
    }
  }

  const locMatch = text.match(CONTACT_PATTERNS.location);
  if (locMatch) contact.location = locMatch[0];

  return contact;
}

function parseExperience(lines) {
  const entries = [];
  let current = null;

  const dateRange = /(\d{4}|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^\n–\-—]*[\-–—][^\n]*(\d{4}|present|current|now)/i;

  for (const line of lines) {
    const looksLikeHeader = line.length < 100 && (dateRange.test(line) || /,\s*(LLC|Inc|Ltd|Corp|Co\.|Technologies|Solutions|Group|Agency|Studio|Labs|GmbH|S\.A\.|PLC)/i.test(line) || /\|\s*/.test(line));

    if (looksLikeHeader) {
      if (current) entries.push(current);
      const dateM = line.match(/\(?((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?\s*\d{4}\s*[\-–—]\s*(?:\d{4}|present|current|now))\)?/i);
      const dates = dateM ? dateM[1] : "";
      const rest = line.replace(dateM ? dateM[0] : "", "").trim();
      const parts = rest.split(/\s*[\|@]\s*|\s+at\s+/i);
      current = {
        title: parts[0]?.trim() || rest,
        company: parts[1]?.trim() || "",
        dates,
        bullets: [],
      };
    } else if (current && /^[\-•*▸►>]/.test(line)) {
      current.bullets.push(line.replace(/^[\-•*▸►>\s]+/, "").trim());
    } else if (current && !looksLikeHeader) {
      if (current.bullets.length === 0 && !current.company && line.length < 80) {
        current.company = line;
      } else {
        current.bullets.push(line.replace(/^[\-•*▸►>\s]+/, "").trim());
      }
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
      current = {
        degree: parts[0]?.trim() || rest,
        school: parts[1]?.trim() || "",
        dates,
        details: [],
      };
    } else if (current) {
      if (!current.school && line.length < 100) current.school = line;
      else current.details.push(line);
    }
  }
  if (current) entries.push(current);
  return entries;
}

function extractSkills(rawText, skillSectionLines) {
  const found = { technical: new Set(), soft: new Set(), languages: new Set() };

  const searchText = rawText + " " + skillSectionLines.join(" ");

  for (const skill of TECHNICAL_SKILLS) {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, "i");
    if (re.test(searchText)) {
      found.technical.add(skill);
    }
  }

  for (const line of skillSectionLines) {
    const parts = line.split(/[,;•·|\/]/);
    for (const part of parts) {
      const cleaned = part.trim().replace(/^[-•*\s]+/, "").trim();
      if (cleaned.length >= 2 && cleaned.length <= 40) {
        if (/[A-Z.]/.test(cleaned) || TECHNICAL_SKILLS.some(s => s.toLowerCase() === cleaned.toLowerCase())) {
          found.technical.add(cleaned);
        }
      }
    }
  }

  for (const skill of SOFT_SKILLS) {
    if (new RegExp(`\\b${skill}\\b`, "i").test(searchText)) {
      found.soft.add(toTitleCase(skill));
    }
  }

  return {
    technical: [...found.technical],
    soft: [...found.soft],
  };
}

function extractLanguages(rawText, langSectionLines) {
  const found = new Set();
  const searchText = rawText + " " + langSectionLines.join(" ");
  for (const lang of LANGUAGES) {
    if (new RegExp(`\\b${lang}\\b`, "i").test(searchText)) {
      found.add(lang);
    }
  }
  return [...found];
}

function parseListSection(lines) {
  return lines
    .map(l => l.replace(/^[\-•*▸►>\d.]\s*/, "").trim())
    .filter(l => l.length > 3);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1));
}

window.CVExtractor = { extractCV };
