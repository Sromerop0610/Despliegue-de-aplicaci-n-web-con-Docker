const express = require("express");
const cors = require("cors");

require("./config/db");

const app = express();
const PORT = 3000;

// Permitir comunicación frontend-backend
app.use(cors());

// Permitir recibir JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});