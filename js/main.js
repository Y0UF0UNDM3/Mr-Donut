const socket = new WebSocket('wss://mr-donut.onrender.com');

socket.onopen = () => {
  console.log('Connected to backend server!');
  // You can send messages here, like requesting matchmaking:
  socket.send(JSON.stringify({ type: 'findMatch' }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Message from backend:', data);
  // Update your UI or game state based on backend messages
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('Disconnected from backend');
};

