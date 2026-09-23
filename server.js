// server.js
const express = require("express");
const path = require("path");

const app = express();
const dist = path.join(__dirname, "public");

app.use(express.static(dist));

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "key-app-ui" });
});

app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(dist, "index.html"));
});

if (require.main === module) {
    const port = process.env.PORT || 3333;
    app.listen(port, "0.0.0.0", () => {
        console.log(`Serving on http://0.0.0.0:${port}`);
    });
}

module.exports = app;
