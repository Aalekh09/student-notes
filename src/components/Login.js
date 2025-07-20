import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255,255,255,0.98)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 32,
      }}>
        <h2 style={{ color: '#d32f2f', fontSize: '2em', marginBottom: 16 }}>Mobile Only</h2>
        <p style={{ color: '#333', fontSize: '1.1em' }}>
          This page is designed for mobile devices.<br />
          Please open it on your phone or resize your browser window.
        </p>
      </div>
    );
  }

  return (
    <div className="login-card">
      <div className="login-logo">SN</div>
      <h2 className="login-title">Student Notes</h2>
      <div className="login-institute">Saha Institute of Management &amp; Technology</div>
      <p className="login-subtitle">Sign in with your email to access the notes.</p>
      <div className="login-btn-wrapper">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const user = decodeJwtResponse(credentialResponse.credential);
            onLogin({ name: user.name, email: user.email });
          }}
          onError={() => {
            alert('Login Failed');
          }}
          useOneTap
          width="100%"
        />
      </div>
    </div>
  );
};

export default Login; 