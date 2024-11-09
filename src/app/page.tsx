'use client';

import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(`Hello, ${name}!`);
    setName('');
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ fontSize: '36px', color: '#333' }}>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: '50%',
            height: '30px',
            fontSize: '18px',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3e8e41')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
        >
          Submit
        </button>
        </form>
    </div>
  );
}

export default Home;
