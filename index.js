const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test-db'
})
conexion.connect()
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyparser = require("body-parser");
const ejs = require("ejs");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.set("views", "./vistas");
const dbConexion = require('./conexion-db.js');


app.get("/", (req, res) => {
    res.render('index')
    
});
app.post("/tunombre", (req, res) => {
    conexion.query("INSERT INTO profesor (dni,nombre,apellido) VALUES (" + req.body.dni + ",'"+ req.body.nombre+"','"+ req.body.apellido + "'"+")")
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
