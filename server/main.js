var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const mysql = require('mysql');

//CONEXION A BD

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'chat'
  });

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

//-------------------------------------------------------------------------

var messages =[{
        id:1,
        text: "Hola soy un mensaje",
        author: "Melissa G"
}]

app.use(express.static('public'));

app.get('/hello', function(req, res){
    res.status(200).send("Hello World!");
});

io.on('connection', function(socket){
    console.log('a user connected to socket');
    socket.emit('messages', messages);

    socket.on('new-message', function(data){
        messages.push(data);

        io.sockets.emit('messages', messages);
    });
});

server.listen(3000, function(){
    console.log("Servidor corriendo en http://localhost:3000");
});

