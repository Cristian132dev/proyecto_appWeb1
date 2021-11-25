//! archivo para conectar el backend con la base de datos

// permite conectarnos a la base de datos y al mismo tiempo definir como van a lucir dentro de la base de datos
const mongoose = require("mongoose");

// conexion a base de datos de manera local, se puede usar bases de datos alojadas en la nube
const URI = "mongodb://localhost/mern-tasks";
mongoose.connect(URI)
    .then(db => console.log("DB esta conectado"))
    .catch(err => console.log(err));

module.exports = mongoose;