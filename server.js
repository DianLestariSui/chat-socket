/**
 * Created by Dian on 24/04/2018.
 */
var app  = require ('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.get('/', function (reg, res ){
res.sendFile(__dirname + '/index.html');
// res.send('<h1>Halo semuanya!</h1>');
});

io.on('connection', function (socket) {
    //kalau ada message baru
    socket.on('newMessage', function (msg) {
        io.emit('newMessage', msg);
        console.log('Chat baru:' + msg);
    });
    
    // kalau user disconnect
    socket.on('disconnect', function (msg) {
        console.log('user disconnected');
    });
});

http.listen(3000, function () {
    console.log('listening on 3000')
});