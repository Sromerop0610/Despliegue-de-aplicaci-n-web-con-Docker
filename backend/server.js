const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONEXIÓN A MYSQL (de momento simple)
const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "",
    database: "readbooks"
});

db.connect((err) => {
    if (err) {
        console.log("Error conexión BD:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

// PRUEBA BACKEND
app.get("/", (req, res) => {
    res.send("Backend funcionando");
});

// REGISTRO DE USUARIO
app.post("/register", (req, res) => {

    const { usuario, password } = req.body;

    const sql = "INSERT INTO usuarios (usuario, password) VALUES (?, ?)";

    db.query(sql, [usuario, password], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error al registrar usuario");
        }

        res.send("Usuario registrado correctamente");
    });
});

app.post("/login", (req, res) => {

    const { usuario, password } = req.body;

    const sql = "SELECT * FROM usuarios WHERE usuario = ?";

    db.query(sql, [usuario], (err, results) => {

        if (err) {
            return res.status(500).json({ ok: false });
        }

        if (results.length === 0) {
            return res.status(401).json({ ok: false });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ ok: false });
        }

        res.status(200).json({ ok: true });
    });
});

// ARRANCAR SERVIDOR
app.listen(3000, "0.0.0.0",() => {
    console.log("Servidor en http://localhost:3000");
});