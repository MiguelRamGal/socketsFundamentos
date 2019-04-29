const { io } = require("../server") // IMPORTO EL ARCHIVO SERVER, EN ESPECIFICO LA VARIABLE IO

//ESTA FUNCION ME PERMITE SABER CUANDO UN USUARIO SE CONECTA, DESCONECTA O RECONECTA A LA APLICACIÓN, LA VARIABLE CLIENTE, CONTIENE VARIOS PARAMETROS QUE ME PERMITEN CONOCER MÁS DE EL
io.on('connection', (client) =>{
    console.log('Usuario Conectado')

    //EMITO UN MENSAJE CUANDO EL USUARIO SE CONECTA
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    //ESTA FUNCIÓN ME PERMITE SABER CUANDO UN USUARIO SE DESCONECTA
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado')
    })

    //DEFINO EL ESCUCHA PARA EL CLIENTE (enviarMensaje)
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)


        client.broadcast.emit('enviarMensaje', data)
        /*if(data.usuario){
            callback({
                estatus: true,
                mensaje: "TODO SALIÓ BIEN"
            })
        }else{
            callback({
                estatus: false,
                mensaje: "TODO SALIÓ MAL!!!!"
            })
        }*/

    })
})