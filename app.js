//npm init --yes
//npm i express
//node app.js
//npm i nodemon -D
const express = require("express"); // importar
const path = require("path"); // constante y modulo
const app = express(); // constante 
app.get("/",(req,res)=>{
    //res.send("Buenos dias");} 
    // funcion, recibe funcion req y respuesta con mensaje
    // res.sendFile("C:/Users/rodri/Desktop/primer servidor/index.html") Sirve para llamar a html desde ruta
    res.sendFile(path.join(__dirname + "/index.html")); // busca automaticamnete y muestra sin volver a ejecutar
    }); 
    
app.listen(3000, ()=>{console.log("Server si funcional", 3000);}); // Escucha 3000 y funcion de mensaje
