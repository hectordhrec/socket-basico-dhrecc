// los on son para escuchar y los emit para enviar
var socket = io();
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdida Conexion al servidor ');
});

socket.emit('enviarMensaje', {
    name: 'Hector david',
    message: 'Hola mundo'
}, function (resp) {
    console.log(resp);
});

socket.on('enviarMensajeServidor', function (message) {
    console.log(message);
});