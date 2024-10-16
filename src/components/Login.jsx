import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { id: 1, email: 'admin@example.com', password: 'admin123', name: 'Admin User', role: 'admin' },
  { id: 2, email: 'user@example.com', password: 'user123', name: 'Normal User', role: 'user' }
];

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      onLogin(user);
      alert(`Login successful! Welcome, ${user.name}`);
      navigate(user.role === 'admin' ? '/create-election' : '/vote');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
      <div className="mt-4 text-sm">
        <p>Sample Users:</p>
        <p>Admin - Email: admin@example.com, Password: admin123</p>
        <p>User - Email: user@example.com, Password: user123</p>
      </div>
    </div>
  );
}

export default Login;