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

const express = require('express');
const { connectToDatabase } = require('./utils/db'); 

const app = express();

app.get('/api/some-data', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('some_collection');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
