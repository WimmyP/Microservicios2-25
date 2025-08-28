const mysql=require('mysql2');

const conection = mysql.createConnection({
    host: process.env.DB_HOST || "mysql",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "mi_bd",
});


console.log("Conectado a MySQL en contenedor");