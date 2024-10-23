import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import '../styles/home.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="hero-section">
          <div className="row first-row">
            <div className="col-12 col-md-7 column left-column">
              <h1>Un Lugar para el <br /> Reencuentro</h1>
              <div className='btn-container'>
                <button><i className="fa-solid fa-paw"></i> Únete a la comunidad</button>
              </div>
            </div>
            <div className="col-12 col-md-5 column right-column text-center">
              <img src="/images/logo.png" alt="Huellitas Logo" className="logo" />
            </div>
          </div>
          <img src="/images/steps.png" alt="Huellas decorativas" className="paw-prints" />
        </div>

        <div className="row second-row">
          <h1>¡Sumate a la plataforma y Ayudá a nuestros amiguitos!</h1>
          <div className='col-12 col-md-6 column left-column'>
            <div>
              <img src="/images/image1.png" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6 column right-column">
            <div className="tittle">
              <h2>Ayudanos a reunirlas con sus dueños</h2>
            </div>
            <div className="description">
              <div className="description-row">
                <div className="step-container step1">
                  <img src="/images/step1.png" alt="" />
                </div>
                <p>Publicá tu anuncio.</p>
              </div>

              <div className="description-row">
                <div className="step-container step">
                  <img src="/images/step2.png" alt="" />
                </div>
                <p>Completá los datos de la mascota. Cuantos más detalles brindes, mejor. ¡No olvides subir fotos en buena calidad!</p>
              </div>

              <div className="description-row">
                <div className="step-container step">
                  <img src="/images/step3.png" alt="" />
                </div>
                <p>¡Colaborá con la comunidad!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row third-row">
          <h2>Últimas <br /> Publicaciones</h2>
          <div className='card-container'>
            <div className="card-slider">
              {[...Array(30)].map((_, i) => (
                <div className="card" key={i}>
                  <div className="image-container">
                    <img src="/images/petExample.png" alt={`Mascota ${i + 1}`} />
                  </div>
                  <div className="name">
                    <h3>Micho</h3>
                  </div>
                  <div className="more-info">
                    <button>Saber más</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row fourth-row">
          <h2>Nuestro Propósito</h2>
          <p>
            En <strong>Huellitas</strong>, creemos que cada mascota merece estar en su hogar.
            Nuestro propósito es conectar mascotas perdidas con sus dueños, brindando un espacio
            para que la comunidad se una y colabore en encontrar a nuestros amiguitos.
          </p>
          {/* <img src="/images/purpose.png" alt="Imagen de propósito" className="purpose-image" /> */}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="social-links">
              <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <p>&copy; 2024 Huellitas - Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
}