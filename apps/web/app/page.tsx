'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Card } from '@burson/ui';

const HeavyChart = dynamic(() => import('../components/HeavyChart'), { ssr: false });

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(()=>setMounted(true),[]);
  return (
    <main style={{ padding: 24 }}>
      <h1>Burson UI Demo</h1>
      <Card style={{ padding: 12, margin: '12px 0' }}>
        <p>Design system components below are from <code>@burson/ui</code>.</p>
        <Button style={{ padding: 8 }}>Example Button</Button>
      </Card>
      <p>Dynamic import below keeps initial bundle lean.</p>
      {mounted && <HeavyChart />}
    </main>
  );
}
