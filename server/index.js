const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
const indexHtml = fs.readFileSync(path.join(publicPath, "index.html"), "utf8");

app.use(express.static(publicPath));
app.use(
  "/vendor/vue",
  express.static(path.join(__dirname, "..", "node_modules", "vue", "dist"))
);
app.use(
  "/vendor/quasar",
  express.static(path.join(__dirname, "..", "node_modules", "quasar", "dist"))
);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.type("html").send(indexHtml);
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
