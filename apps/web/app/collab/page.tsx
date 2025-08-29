'use client';
import React, { useEffect, useState } from 'react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export default function Collab() {
  const [text, setText] = useState('');
  useEffect(() => {
    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:1234', 'burson-room', doc);
    const ytext = doc.getText('shared');
    ytext.observe(() => setText(ytext.toString()));
    return () => provider.destroy();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h2>Real-time Collaboration (CRDT)</h2>
      <p>Open this page in two tabs to see syncing.</p>
      <textarea
        style={{ width: '100%', height: 160 }}
        value={text}
        onChange={(e) => {
          // Normally we'd insert into ytext; omitted for brevity
        }}
        placeholder="Connected to y-websocket server at ws://localhost:1234"
      />
    </main>
  );
}
