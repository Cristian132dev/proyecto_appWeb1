//! archivo de node.js que permite arrancar el servidor (rest-api)

const express = require("express");          // importacion de libreria express
const app = express();                       // ejecucion de la libreria express
const morgan = require("morgan");            // modulo de informacion de la conexion (metodo-url-respuesta-tiempo-peso bytes)
const path = require("path");                // ayuda a concatenar rutas de archivos sin importar el sistema operativo
const {mongoose} = require("./database");    // hace la conexion entre la base de datos y el backend


//! settings(configuracion)
// si llegase a montar la app en un servidor en la nube, esta define el puerto de ejecucion
// por eso se da a escoger el puerto del servidor, si no lo hay entonces pone el puerto 4500
app.set("port", process.env.PORT || 4500);
app.use(express.json());


//! middlewares (fuciones que se ejecutan antes de que lleguen a las rutas)
app.use(morgan("dev"));  // ejecuta morgan de forma que se pueda leer en terminal
app.use(express.json()); // comprueba que la informacion que pasa de react a node sea en formato json


//! routes (urls del servidor)
// invoca las rutas que definimos en task.routes
app.use("/api/task", require("./routes/task.routes"));


//! static files( html, css, js )
// ruta especifica de la carpeta donde tenemos nuestros archivos html
app.use(express.static( path.join(__dirname, "public") ));


//! Starting the server ( aqui arranca mi servidor )
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});