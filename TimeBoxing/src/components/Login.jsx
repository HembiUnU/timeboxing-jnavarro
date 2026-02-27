import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-screen">
      <div className="login-card">
        <h1>LOGIN</h1>
        <p>Gestiona tu tiempo de forma eficiente</p>
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
          <input type="text" placeholder="Usuario" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;