import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function decodeJwtResponse(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
}

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#gradient)" />
              <path d="M12 18h24v2H12v-2zm0 6h24v2H12v-2zm0 6h16v2H12v-2z" fill="white" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="login-text">
            <h1 className="login-title">Student Notes</h1>
            <p className="login-institute">Saha Institute of Management & Technology</p>
          </div>
        </div>
        
        <div className="login-content">
          <h2 className="login-welcome">Welcome Back</h2>
          <p className="login-subtitle">Sign in with your institutional email to access course materials and notes.</p>
          
          <div className="login-btn-wrapper">
            <GoogleLogin
              onSuccess={credentialResponse => {
                const user = decodeJwtResponse(credentialResponse.credential);
                onLogin({ name: user.name, email: user.email });
              }}
              onError={() => {
                alert('Login Failed. Please try again.');
              }}
              useOneTap
              theme="outline"
              size="large"
              width="100%"
            />
          </div>
          
          <div className="login-features">
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <span>Access course notes</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span>Mobile & desktop friendly</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure authentication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 