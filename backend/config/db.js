const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "readbooks",
    port: 3307
});

connection.connect((error) => {
    if (error) {
        console.error("Error conectando a MySQL:", error);
        return;
    }

    console.log("Conectado a MySQL correctamente");
});

module.exports = connection;