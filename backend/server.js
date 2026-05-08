const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONEXIÓN A MYSQL (de momento simple)
const db = mysql.createConnection({
    host: "localhost",
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
            return res.status(500).send("Error");
        }

        if (results.length === 0) {
            return res.status(401).send("Usuario no existe");
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).send("Contraseña incorrecta");
        }

        res.send("Login correcto");
    });
});

// ARRANCAR SERVIDOR
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});