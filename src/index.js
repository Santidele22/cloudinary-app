const express = require("express");
const router = require("./routes/routes");
const server = express();
const path = require("path");
const PORT = process.env.PORT ?? 3000;
// Configurar el motor de plantillas EJS
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde la carpeta 'public'
server.use(express.static(path.join(__dirname, "public")));
server.use(router);

server.listen(PORT, () => {
  console.log(`Server listening in PORT http://localhost:${PORT}`);
});
