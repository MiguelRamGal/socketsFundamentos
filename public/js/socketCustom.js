var socket = io();//DEFINO MI VARIABLE PARA MANIPULAR AL SOCKER

//ESTA FUNCION ME PERMITE SABER CUANDO UN USUARIO SE CONECTA A SOCKETIO
socket.on('connect', function(){
    console.log('Conectado al servidor')
})

//ESTA FUNCIÓN ME PERMITE DETECTAR CUANDO UN USAURIO SE DESCONECTA
socket.on('disconnect', function(){
    console.log('Se perdió conección con el servidor')
})

//ESTA FUNCION ME PERMITE EMITIR UNA PETICIÓN AL BASCK END
socket.emit('enviarMensaje', { usuario: 'Miguel', mensaje: 'Hola mundo' }, function( response ){
    console.log(response)
});

//DECLAR MI ESCUCHA PARA EL EVENTO enviarMensaje
socket.on('enviarMensaje', (data) =>{
    console.log('Servidor:', data)
})