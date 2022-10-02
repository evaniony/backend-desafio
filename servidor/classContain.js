
const fs = require("fs");
class Contenedor{
    constructor(title){
        this.title = title;
    }
    //buscar id
    getById = async(id)=>{
        try {
            if(fs.existsSync(this.title)){
                const contenido = await fs.promises.readFile(this.title, "utf-8");
                if(contenido){
                    const productos = JSON.parse(contenido);
                    const producto = productos.find(item => item.id === id);
                    return producto;
                }else{
                    return "El archivo esta vacio"
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    //devuelve un array con todos los objetos
    getAll = async ()=>{
        const contenido = await fs.promises.readFile(this.title, "utf-8");
        const productos = JSON.parse(contenido);
        return productos;
    }
}

const productos = new Contenedor("productos.txt");
console.log(productos);


module.exports = Contenedor;
/* const productos = new Contenedor("productos.txt")
console.log(productos); */