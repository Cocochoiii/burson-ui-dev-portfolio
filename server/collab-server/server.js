import { setupWSConnection } from 'y-websocket/bin/utils';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 1234 });

wss.on('connection', (conn, req) => {
  const docName = req.url?.slice(1).split('?')[0] || 'burson-room';
  setupWSConnection(conn, req, { docName });
});

console.log('y-websocket collab server running on ws://localhost:1234');
