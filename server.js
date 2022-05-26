const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("./index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
});
