const express = require("express");
const path = require('path');

const app = express();

const basePath = path.join(__dirname, 'index.html')

app.get("/", (req, res) => {
    res.send(basePath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
});
