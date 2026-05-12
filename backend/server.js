const express = require("express");
const cors = require("cors");

const connection = require("./config/db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// REGISTER
app.post("/register", (req, res) => {
    console.log("BODY RECIBIDO:", req.body);
    const { usuario, password } = req.body;

    const sql = "INSERT INTO usuarios (usuario, password) VALUES (?, ?)";

    connection.query(sql, [usuario, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ mensaje: "Error al registrar usuario" });
        }

        res.json({ mensaje: "Usuario registrado correctamente" });
    });
});

app.post("/login", (req, res) => {
    const { usuario, password } = req.body;

    const sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";

    connection.query(sql, [usuario, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ mensaje: "Error en el servidor" });
        }

        if (results.length > 0) {
            res.json({ mensaje: "Login correcto" });
        } else {
            res.status(401).json({ mensaje: "Usuario o contraseña incorrectos" });
        }
    });
});

// Iniciar servidor (SIEMPRE al final)
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});