const fs = require("fs");
const express = require("express");
const app = express();
const Contenedor = require("./classContain");

const productos = new Contenedor("productos.txt")
console.log(productos);
app.listen(8080, ()=>{
    console.log("server listening on port with express");
})

app.get("/", (req, res)=>{
    res.send("Desafio 3 --- Servidor con Express")
});

app.get("/productos", (req, res)=>{
    res.send(productos.getAll())
})

app.get("/productoRandom", (req, res)=>{
    res.send(productos.getById())
})
