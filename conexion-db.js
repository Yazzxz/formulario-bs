const mysql = require('mysql');
//resultado = ("INSERT INTO profesor (`dni`, `nombre`, `apellido`) VALUES "[valor])

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test-db'
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Se establecio conexion')
        }
    })
let valor = [999,'Pepe', 'Rodriguez']


conexion.query('SELECT *  from profesor',(error, resultado) =>{
    console.log("Profesores:")
    console.log(resultado)
})