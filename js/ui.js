(function () {
    const data = JSON.parse(sessionStorage.getItem("cvData") || "null");

    if (!data) {
        document.getElementById("result-main").innerHTML = `
      <div class="empty-state">
        <h2>No CV data found</h2>
        <p>Please go back and upload a CV file.</p>
        <a href="index.html" class="btn-primary" style="display:inline-flex;margin-top:20px;">← Upload a CV</a>
      </div>`;
        return;
    }

    const fileBadge = document.getElementById("file-badge");
    if (fileBadge && data._fileName) {
        fileBadge.innerHTML = `
      ${fileIcon()}
      <span>${esc(data._fileName)}</span>`;
    }

    document.getElementById("cv-name").textContent = data.name || "Unknown";

    const contactEl = document.getElementById("cv-contact");
    contactEl.innerHTML = buildContactRows(data.contact);

    renderSection("section-summary", data.summary, () =>
        `<p class="summary-text">${esc(data.summary)}</p>`
    );

    renderSection("section-experience", data.experience?.length, () =>
        data.experience.map(buildEntryHTML).join("")
    );

    renderSection("section-education", data.education?.length, () =>
        data.education.map(buildEduHTML).join("")
    );

    renderSection("section-skills",
        data.skills?.technical?.length || data.skills?.soft?.length, () => {
            let html = "";
            if (data.skills.technical.length) {
                html += `<div class="skills-group">
        <div class="skills-group-label">Technical</div>
        <div class="skill-tags">${data.skills.technical.map(s =>
                    `<span class="skill-tag technical">${esc(s)}</span>`).join("")}
        </div></div>`;
            }
            if (data.skills.soft.length) {
                html += `<div class="skills-group">
        <div class="skills-group-label">Soft Skills</div>
        <div class="skill-tags">${data.skills.soft.map(s =>
                    `<span class="skill-tag soft">${esc(s)}</span>`).join("")}
        </div></div>`;
            }
            return html;
        });

    renderSidebarList("sidebar-projects", data.projects, "Projects");
    renderSidebarList("sidebar-certs", data.certifications, "Certifications");

    const langEl = document.getElementById("sidebar-languages");
    if (langEl) {
        if (data.languages?.length) {
            langEl.innerHTML = `
        <div class="sidebar-card">
          <div class="sidebar-card-title">Languages</div>
          <div>${data.languages.map(l => `<span class="lang-pill">${esc(l)}</span>`).join("")}</div>
        </div>`;
        } else {
            langEl.style.display = "none";
        }
    }

    document.querySelectorAll(".cv-section").forEach((el, i) => {
        el.style.animationDelay = `${i * 80}ms`;
    });

    function renderSection(id, condition, buildFn) {
        const el = document.getElementById(id);
        if (!el) return;
        if (!condition) { el.style.display = "none"; return; }
        const body = el.querySelector(".section-body");
        if (body) body.innerHTML = buildFn();
    }

    function renderSidebarList(id, items, label) {
        const el = document.getElementById(id);
        if (!el) return;
        if (!items?.length) { el.style.display = "none"; return; }
        el.innerHTML = `
      <div class="sidebar-card">
        <div class="sidebar-card-title">${label}</div>
        <div class="list-items">${items.map(item =>
            `<div class="list-item">${esc(item)}</div>`).join("")}
        </div>
      </div>`;
    }

    function buildContactRows(c) {
        if (!c) return "";
        const rows = [];
        if (c.email) rows.push(row(emailIcon(), `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`));
        if (c.phone) rows.push(row(phoneIcon(), esc(c.phone)));
        if (c.location) rows.push(row(pinIcon(), esc(c.location)));
        if (c.linkedin) rows.push(row(linkedinIcon(), `<a href="https://${esc(c.linkedin)}" target="_blank">${esc(c.linkedin)}</a>`));
        if (c.github) rows.push(row(githubIcon(), `<a href="https://${esc(c.github)}" target="_blank">${esc(c.github)}</a>`));
        if (c.website) rows.push(row(linkIcon(), `<a href="${esc(c.website)}" target="_blank">${esc(c.website)}</a>`));
        return `<div class="contact-grid">${rows.join("")}</div>`;
    }

    function row(icon, content) {
        return `<div class="contact-row">${icon}<span>${content}</span></div>`;
    }

    function buildEntryHTML(e) {
        return `<div class="entry">
      <div class="entry-header">
        <div class="entry-title">${esc(e.title)}</div>
        ${e.dates ? `<span class="entry-dates">${esc(e.dates)}</span>` : ""}
      </div>
      ${e.company ? `<div class="entry-company">${esc(e.company)}</div>` : ""}
      ${e.bullets.length ? `<ul class="entry-bullets">${e.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
    </div>`;
    }

    function buildEduHTML(e) {
        return `<div class="entry">
      <div class="entry-header">
        <div class="entry-title">${esc(e.degree)}</div>
        ${e.dates ? `<span class="entry-dates">${esc(e.dates)}</span>` : ""}
      </div>
      ${e.school ? `<div class="entry-school">${esc(e.school)}</div>` : ""}
      ${e.details.length ? `<ul class="entry-bullets">${e.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
    </div>`;
    }

    function esc(s) {
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function svgWrap(path) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
    }
    function emailIcon() { return svgWrap(`<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`); }
    function phoneIcon() { return svgWrap(`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16h1"/>`); }
    function pinIcon() { return svgWrap(`<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`); }
    function linkedinIcon() { return svgWrap(`<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`); }
    function githubIcon() { return svgWrap(`<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>`); }
    function linkIcon() { return svgWrap(`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`); }
    function fileIcon() { return svgWrap(`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/>`); }
})();
