import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8000; 

app.get("/", (req, res) => {
  return res.json({ message: "Welocome to my spaceform server 🐋" });
});

app.get("/health", (req, res) => {
  return res.json({ message: "server is healthy and running 🐋  ", status: "Github actions is fully implemented" });
});

app.get("/chaicode", (req, res) => {
  return res.json({ message: "We are live and this is the first response from chaicode  ", status: "Chaicode is now live" });
});

app.get("/coffee", (req, res) => {
  return res.json({ message: "Welcome to chai aur code server 🐋  ", status: "Github actions is fully implemented" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
