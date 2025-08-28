const mysql=require('mysql2');

//configurar la conexion a la base de datos
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'mi_bd',
});


console.log("Conectado a MySQL en Docker desde el host");
