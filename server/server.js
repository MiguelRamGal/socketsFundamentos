const express = require('express');
const socketIO = require('socket.io') //IMPORTO LA LIBRERIA DE SOCKET
const http = require('http') //IMPORTO LA LIBRERIA HTTP
const path = require('path');

const app = express();

let server  = http.createServer(app)//CREO UN SERVIDOR PARA PODER UTILIZAR SOCKET


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//DEFINO MI VARIABLE PARA MANTENER UNA CONECCION CON EL SERVIDOR, DE ESTA FORMA EXPORTO LA VARIABLE IO PARA PODERLA UTILIZAR EN DIFERENTES ARCHIVOS
module.exports.io = socketIO(server)
require('./sockets/socket')


//CUANDO UTLIZO SOCKET, UTILIZO LA VARIABLE DE SERVER O LA QUE DEFINA YA QUE ESTA CUENTA CON LAS PROPIEDADES DE APP MÁS LAS DE SOCKET
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});