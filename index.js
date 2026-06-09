import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8000; 

app.get("/", (req, res) => {
  return res.json({ message: "Welocome to my server" });
});

app.get("/health", (req, res) => {
  return res.json({ message: "server is healthy and running 🐋  ", status: "Github actions implemented" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
