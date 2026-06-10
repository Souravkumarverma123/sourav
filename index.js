import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8000;

// ── Root ──────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Spaceform Server 🐋",
    author: "Sourav Kumar Verma",
    status: "online",
    docs: "Visit /routes to explore all available endpoints",
  });
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/health", (req, res) => {
  return res.json({
    status: "healthy ✅",
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString(),
    deployment: "GitHub Actions + Docker + Caddy",
  });
});

// ── ChaiCode ─────────────────────────────────────────────────────────────────
app.get("/chaicode", (req, res) => {
  return res.json({
    message: "We are live! First response from ChaiCode 🎉",
    status: "Chaicode is now live",
    community: "chai aur code",
    link: "https://chaicode.com",
  });
});

// ── Coffee ────────────────────────────────────────────────────────────────────
app.get("/coffee", (req, res) => {
  return res.json({
    message: "Welcome to Chai Aur Code Server ☕🐋",
    status: "GitHub Actions is fully implemented",
    quote: "Code with chai, deploy with confidence.",
  });
});

// ── About ─────────────────────────────────────────────────────────────────────
app.get("/about", (req, res) => {
  return res.json({
    project: "Spaceform Server",
    description: "A Node.js + Express server deployed with Docker, Caddy reverse proxy, and automated GitHub Actions CI/CD.",
    stack: {
      runtime: "Node.js 24 (Alpine)",
      framework: "Express v5",
      proxy: "Caddy (auto HTTPS)",
      containerization: "Docker + Docker Compose",
      cicd: "GitHub Actions",
    },
    author: "Sourav Kumar Verma",
  });
});

// ── Version ───────────────────────────────────────────────────────────────────
app.get("/version", (req, res) => {
  return res.json({
    version: "1.0.0",
    node: process.version,
    platform: process.platform,
    environment: process.env.NODE_ENV ?? "production",
  });
});

// ── Routes explorer ───────────────────────────────────────────────────────────
app.get("/routes", (req, res) => {
  return res.json({
    available_routes: [
      { method: "GET", path: "/",        description: "Welcome message" },
      { method: "GET", path: "/health",  description: "Server health check" },
      { method: "GET", path: "/about",   description: "Project info & tech stack" },
      { method: "GET", path: "/version", description: "Node.js version & environment" },
      { method: "GET", path: "/chaicode",description: "ChaiCode community endpoint" },
      { method: "GET", path: "/coffee",  description: "Chai Aur Code greeting" },
      { method: "GET", path: "/routes",  description: "All available routes (you are here)" },
    ],
  });
});

// ── 404 catch-all ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  return res.status(404).json({
    error: "Route not found 🔍",
    hint: "Visit /routes to see all available endpoints",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
