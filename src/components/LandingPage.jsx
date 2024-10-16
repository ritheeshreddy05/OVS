import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Online Voting System</h1>
          <p className="py-6">Secure, transparent, and easy-to-use online voting platform for all your election needs.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/vote" className="btn btn-secondary">Vote Now</Link>
            <Link to="/create-election" className="btn btn-accent">Create Election</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;