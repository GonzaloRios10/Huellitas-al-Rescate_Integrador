import React, { useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='logo-container'>
          <img src="/images/logo.png" alt="Huellitas Logo" className='logo' />
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li className="dropdown">
              <a href="#"><i className="fa-solid fa-caret-down"></i> Mascotas</a>
              <ul className="dropdown-menu">
                <li><a href="#">Perdidos</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </li>
            <li><a href="#contact">Propósito</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="login" onClick={() => setShowLogin(true)}>
            Ingresar
          </button>
          <button className="btn register" onClick={() => setShowRegister(true)}>
            <i className="fa-regular fa-circle-user"></i> Crear Cuenta
          </button>
        </div>
      </header>

      {/* Modal para Ingresar */}
      <div className={`modal fade ${showLogin ? 'show d-block' : ''}`} onClick={() => setShowLogin(false)}>
        <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <i className="fa-regular fa-circle-xmark" onClick={() => setShowLogin(false)}></i>
            </div>
            <div className='logo-container'>
              <img src="/images/logo.png" alt="Huellitas Logo" />
            </div>

            <div className='text-description'>
              <p>Inicia sesión con tu <br /> cuenta de usuario</p>
            </div>

            <div className="modal-body">
              <form>
                <div className='input-container'>
                  <input type="email" placeholder="Email" />
                </div>
                <br />
                <div className='input-container'>
                  <input type="password" placeholder="Contraseña" />
                </div>
                <br />
                <div className='btn-container'>
                  <button type="submit" className="btn-login">Ingresar</button>
                </div>
                <div className="forgot-password">
                  <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Crear Cuenta */}
      <div className={`modal fade ${showRegister ? 'show d-block' : ''}`} onClick={() => setShowRegister(false)}>
        <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Crear Cuenta</h5>
              <button type="button" className="btn-close" onClick={() => setShowRegister(false)}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" placeholder="Ingrese su nombre" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo</label>
                  <input type="email" className="form-control" placeholder="Ingrese su correo" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" className="btn btn-success">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}