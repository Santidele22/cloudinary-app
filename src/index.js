const express = require("express");
const router = require("./routes/routes");
const server = express();
const path = require("path");
//mongoose
const connectDB = require("./model/mongodb/connection");
const PORT = process.env.PORT ?? 3000;
// Configurar el motor de plantillas EJS
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde la carpeta 'public'
server.use(express.static(path.join(__dirname, "public")));
server.use(router);
server.use(express.json());
// Llama a la función para conectar a la base de datos
connectDB()
  .then(() => {
    // Inicia el servidor Express una vez que la conexión a la base de datos se haya establecido correctamente
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
