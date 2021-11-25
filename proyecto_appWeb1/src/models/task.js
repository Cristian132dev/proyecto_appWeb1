//! modelo de datos (tareas)

const mongoose = require("mongoose");
const {Schema} = mongoose;

// estructura de como van a lucir los datos
const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model("Task", TaskSchema);