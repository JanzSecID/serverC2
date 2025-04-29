const WebSocket = require('ws');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });
  ws.send('Hello from WebSocket server!');
});

// Express server setup to upgrade HTTP to WebSocket
app.server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
