const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log('WebSocket server started on port', PORT);

let waitingPlayer = null;

wss.on('connection', function connection(ws) {
  console.log('New client connected');

  ws.on('message', function incoming(message) {
    console.log('received:', message);
    // You can add matchmaking or game logic here
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    if (waitingPlayer === ws) {
      waitingPlayer = null;
    }
  });

  // Simple matchmaking: pair players 2 by 2
  if (waitingPlayer === null) {
    waitingPlayer = ws;
    ws.send(JSON.stringify({ type: 'matchmaking', status: 'waiting' }));
  } else {
    waitingPlayer.send(JSON.stringify({ type: 'matchmaking', status: 'matched' }));
    ws.send(JSON.stringify({ type: 'matchmaking', status: 'matched' }));
    waitingPlayer = null;
  }
});
