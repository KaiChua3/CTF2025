import React, { useState } from 'react';
import { supabase } from './supabaseclient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleAuth = async () => {
    setError('');
    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        console.log('Logged in:', data);
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        console.log('Signed up:', data);
      }
    } catch (error: unknown) {
      setError("error");
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    console.log('Logged out');
  };

  const handleToggleAuth = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : ''}</h1>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button onClick={handleAuth}>
          {isLogin ? 'Login' : ''}
        </button>
      </div>
      <div>
        <button onClick={handleToggleAuth}>
          {isLogin ? '' : ''}
        </button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Auth;