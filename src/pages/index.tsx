import * as React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Instant redirect to the introduction page with no loading text
    window.location.replace('/welcome');
  }, []);

  // Return null to show nothing while redirecting
  return null;
} 