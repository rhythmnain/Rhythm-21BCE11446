const http = require('http');
const WebSocket = require('ws');
const {handleConnection} = require('./websocket');
const Logic = require('./Logic');
const server = http.createServer();
const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
    handleConnection(ws, wss);
});

server.listen(6006, () => {
    console.log('Server started on port 6006');
});
