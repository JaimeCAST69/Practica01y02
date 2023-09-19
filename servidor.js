const express= require("express");//creamos una variable de tipo  constante 
// Importa el módulo 'express' para crear una aplicación web.

const app= express(); //creamos otra variable que es una instancia de la aplicación web de Express.

app.use(express.static(__dirname));//esto acepta archivos staticos      

app.get("/",(req,res)=>{//el app es para enviar datos 
    //esta funcion reditrecciona al archivo html 
    res.sendFile(__dirname + "/index.html");
    
});

app.listen(3000,()=>{//esta funcion estara a la escucha en el puerto 3000 por si hay una peticion 
    console.log("corriendo en puerto",3000)//esto imprime en cosola si se ha ejecutado con exito el servidor
});
    
