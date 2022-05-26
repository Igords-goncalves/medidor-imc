const express = require("express");
const path = require('path');
const router = express.Router();

const app = express();

router.get('/', (req,res) => {
    res.sen(path.join(__dirname, 'index.html'))
  });

app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
});
