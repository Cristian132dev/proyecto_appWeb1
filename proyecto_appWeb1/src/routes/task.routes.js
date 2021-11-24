// definir las operaciones mediante urls

const express = require("express");
const router = express.Router();

// define rutas en el servidor, las respuestas comunmente son en formato json
router.get("/", (req, res) => {
    res.json({
        status: "la API funciona"
    })
})

module.exports = router;