const {io} = require('../server');

// método para saber que pasa con el cliente, si se conecta o se desconecta y la informacion de la computadora
io.on('connection', (client) => {
    console.log("Usuario conectado");

    client.on('disconnect', ()=>{ //identificar cuando un cliente se desconecta
        console.log('Usuario desconectado');
    });
    
    client.on('enviarMensaje', (data, callback)=>{ //escuchar el evento 
        console.log(data);

        client.broadcast.emit('enviarMensajeServidor',data); // mensaje a todos los usuarios

        //uso de callback
        // if (data.name) {
        //     callback({resp: 'Todo salio bien!'});
        // } else {
        //     callback({resp: 'Todo salio mal!'});
        // }
    });

    client.emit('enviarMensajeServidor', {
        name: 'Administrador',
        message: 'Bienvenido a socket DH'
    });
});