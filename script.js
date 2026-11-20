/* =========================================================
   DATA – edit your content here
   ========================================================= */
const skills = [
  {
    icon: "</>",
    title: "Languages",
    tone: 1,
    items: ["C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: "▤",
    title: "Frontend",
    tone: 4,
    items: ["React.js", "HTML5", "CSS3"],
  },
  {
    icon: "☰",
    title: "Backend",
    tone: 3,
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "Socket.IO",
      "WebSockets",
      "JWT Auth",
    ],
  },
  {
    icon: "✦",
    title: "AI / ML / GenAI",
    tone: 1,
    items: [
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Model Evaluation",
      "LLMs",
      "Generative AI",
      "RAG",
    ],
  },
  {
    icon: "⛁",
    title: "Databases",
    tone: 2,
    items: ["MySQL", "MongoDB", "CRUD"],
  },
  {
    icon: "◎",
    title: "CS Fundamentals",
    tone: 4,
    items: ["DSA", "OOP", "DBMS", "OS (Basics)", "Networks (Basics)"],
  },
  {
    icon: "⚙",
    title: "Tools",
    tone: 3,
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
];

const projects = [
  {
    title: "Satellite Digital Twin – CubeSat Health Monitoring",
    tech: "Python · XGBoost · Random Forest · LSTM · Explainable AI",
    tone: 1,
    github: "https://github.com/Suchendra-018/Satellite-Digital-Twin",
    points: [
      "Built an AI-driven digital twin that monitors CubeSat health from subsystem telemetry and flags abnormal behavior.",
      "Preprocessed telemetry, engineered features, and trained XGBoost, Random Forest, and LSTM models for anomaly detection and predictive fault management.",
      "Achieved 94.57% accuracy with XGBoost and used Explainable AI to identify the features driving fault detection.",
    ],
    tags: ["Python", "XGBoost", "Random Forest", "LSTM", "Explainable AI"],
  },
  {
    title: "Real-Time Chat Application",
    tech: "React.js · Node.js · MongoDB · Socket.IO",
    tone: 2,
    github: "https://github.com/Suchendra-018/Real-Time-Chat-Application",
    points: [
      "Designed a full-stack messaging app with a React.js frontend and a Node.js and Express.js backend.",
      "Implemented JWT authentication, RESTful APIs, and MongoDB storage for users and messages.",
      "Integrated Socket.IO for real-time, bidirectional communication without page refreshes.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
  },
  {
    title: "AegisAI – Scam and Data Risk Copilot",
    tech: "Android · AI-Based Risk Analysis · JSON",
    tone: 3,
    github: "https://github.com/Suchendra-018/Ageis-Scan-App",
    points: [
      "Developed an Android app that helps users identify mobile app scams and understand data and privacy risks.",
      "Built a local JSON risk database covering 110 mobile applications for application-level risk assessment.",
      "Identifies harmful APKs and investment apps and presents the related risk information.",
    ],
    tags: ["Android", "AI Risk Analysis", "JSON"],
  },
  {
    title: "F1-MapFeed – Formula 1 Data Visualization",
    tech: "Python · FastF1 · Pandas · Flask",
    tone: 1,
    github: "https://github.com/Suchendra-018/F1-MapFeed",
    points: [
      "Retrieved Formula 1 session and telemetry data using FastF1.",
      "Used Pandas to process the data and analyze driver performance and session statistics.",
      "Served the processed data through a Flask web interface.",
    ],
    tags: ["Python", "FastF1", "Pandas", "Flask"],
  },
];

const certifications = [
  {
    title: "Introduction to Large Language Models",
    issuer: "NPTEL, IIT Madras · 2026",
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL, IIT Madras · 2025",
  },
  { title: "Python (Basic)", issuer: "HackerRank" },
  { title: "Data Analytics using Tableau", issuer: "Deloitte" },
  {
    title: "AI + Sustainability Virtual Internship",
    issuer: "IBM SkillsBuild",
  },
];

/* =========================================================
   RENDERING
   ========================================================= */
const chips = (list) =>
  `<div class="chips">${list.map((t) => `<span>${t}</span>`).join("")}</div>`;

function renderSkills() {
  document.getElementById("skills-grid").innerHTML = skills
    .map(
      (s) => `
      <article class="card tone-${s.tone}">
        <div class="icon">${s.icon}</div>
        <h3>${s.title}</h3>
        ${chips(s.items)}
      </article>`,
    )
    .join("");
}

function renderProjects() {
  document.getElementById("projects-grid").innerHTML = projects
    .map(
      (p) => `
      <article class="card project tone-${p.tone}">
        <div class="project-head">
          <div class="icon">▣</div>
          <a class="github" href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
        <h3>${p.title}</h3>
        <div class="tech">${p.tech}</div>
        <ul class="bullets">${p.points.map((t) => `<li>${t}</li>`).join("")}</ul>
        ${chips(p.tags)}
      </article>`,
    )
    .join("");
}

function renderCertifications() {
  document.getElementById("certs-grid").innerHTML = certifications
    .map(
      (c) => `
      <div class="card cert">
        <div class="icon">◫</div>
        <div><b>${c.title}</b><small>${c.issuer}</small></div>
      </div>`,
    )
    .join("");
}

/* =========================================================
   THEME TOGGLE
   ========================================================= */
function initTheme() {
  const root = document.documentElement;
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

/* =========================================================
   SCROLL EFFECTS: reveal animation, active nav link, progress bar
   ========================================================= */
const REVEAL_SELECTOR = [
  ".status-pill",
  "h1",
  ".role",
  ".lead",
  ".btn-row",
  ".meta",
  ".hero-side",
  ".eyebrow",
  "h2",
  ".about > *",
  ".card",
  ".node",
  ".contact p",
].join(",");

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    el.classList.add("reveal");
    // Stagger siblings slightly (max 6 steps)
    el.style.setProperty(
      "--i",
      Math.min([...el.parentNode.children].indexOf(el), 6),
    );
    observer.observe(el);
  });

  document.querySelectorAll(".timeline").forEach((el) => observer.observe(el));
}

function initNavHighlight() {
  const links = [...document.querySelectorAll("#nav a")];
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + entry.target.id,
          ),
        );
      }),
    { rootMargin: "-40% 0px -55% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((s) => observer.observe(s));
}

function initProgressBar() {
  const bar = document.getElementById("progress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* =========================================================
   INIT
   ========================================================= */
renderSkills();
renderProjects();
renderCertifications();
initTheme();
initReveal(); // must run after the render functions
initNavHighlight();
initProgressBar();
