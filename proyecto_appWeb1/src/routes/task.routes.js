//! definir las operaciones mediante urls

const express = require("express");
const router = express.Router();

// modelo que permite hacer consultas a la base de datos almacenado en una constante
const Task = require("../models/task");

//! define rutas en el servidor, las respuestas comunmente son en formato json

// obtener datos del servidor
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
})

// obtener solo una tarea
router.get("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task)

})

// almacenar datos del servidor
router.post("/", async (req, res) => {
    const { title , description } = req.body;
    const task =  new Task({
        title: title, description: description
    })
    await task.save();
    res.json({status: "tarea guardada"});
});

// actualizar datos del servidor
router.put("/:id", async (req, res) => {
    const {title, description} = req.body;
    const newTask = {
        title: title, description: description
    }
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json("tarea actualizada");
})

// eliminar datos del servidor
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json("tarea eliminada")
})

module.exports = router;