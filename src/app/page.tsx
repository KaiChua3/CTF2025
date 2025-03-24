'use client'

import Auth from './Auth';
import React, { useEffect, useState } from 'react';
import { supabase } from 'C:/Users/chuaz/ctf-blushacks-2025/src/app/supabaseclient';

export default function Home() {

  const [session, setSession] = useState<unknown>(null);

  useEffect(() => {
    // Get current session on load
    const currentSession = supabase.auth.getSession();
    setSession(currentSession);

    // Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (!session) {
    return <Auth />;
  }

  return (
    <div>
      <h1>kbjrnwa</h1>
    </div>
  );
}
