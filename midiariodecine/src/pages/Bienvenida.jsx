import React, { useState, useEffect } from 'react';
import '../styles/Bienvenida.css';

const Bienvenida = ({ onStart }) => {
  const [showContent, setShowContent] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);

  useEffect(() => {
    // Animación inicial
    setTimeout(() => setShowContent(true), 500);
    setTimeout(() => setAnimateFeatures(true), 1500);
  }, []);

  const features = [
    {
      icon: '🎭',
      title: 'Gestión Completa',
      description: 'Agrega, edita, elimina y visualiza tu colección de películas'
    },
    {
      icon: '🔍',
      title: 'Búsqueda Inteligente',
      description: 'Encuentra películas por título en tiempo real'
    },
    {
      icon: '🎨',
      title: 'Filtros por Género',
      description: 'Organiza tu colección por categorías cinematográficas'
    },
    {
      icon: '⭐',
      title: 'Sistema de Calificaciones',
      description: 'Califica tus películas del 1 al 10 con estrellas'
    },
    {
      icon: '📱',
      title: 'Diseño Responsivo',
      description: 'Perfecta experiencia en desktop, tablet y móvil'
    },
    {
      icon: '🎪',
      title: 'Interfaz Moderna',
      description: 'Diseño elegante con glassmorphism y animaciones'
    }
  ];

  return (
    <div className="bienvenida">
      {/* Partículas de fondo */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 4}`}></div>
        ))}
      </div>

      <div className="bienvenida-container">
        {/* Hero Section */}
        <section className={`hero ${showContent ? 'animate-in' : ''}`}>
          <div className="hero-content">
            <div className="logo-container">
              <div className="logo-icon">🎬</div>
              <h1 className="logo-title">Mi Diario de Cine</h1>
            </div>
            
            <p className="hero-subtitle">
              Tu colección personal de películas y reseñas
            </p>
            
            <div className="hero-description">
              <p>
                Una aplicación web moderna y elegante que te permite gestionar 
                tu propia colección personal de películas con una interfaz intuitiva 
                y funcionalidades completas.
              </p>
            </div>

            <div className="tech-badges">
              <span className="badge">React 19</span>
              <span className="badge">React Hook Form</span>
              <span className="badge">Hot Toast</span>
              <span className="badge">Vite</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`features ${animateFeatures ? 'animate-in' : ''}`}>
          <h2 className="features-title">✨ Características Principales</h2>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Géneros Disponibles</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Películas a Guardar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">⭐</div>
              <div className="stat-label">Sistema de Estrellas</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para comenzar?</h2>
            <p className="cta-subtitle">
              Comienza a construir tu biblioteca cinematográfica personal
            </p>
            
            <button onClick={onStart} className="start-button">
              <span className="button-icon">🍿</span>
              Comenzar Mi Diario
              <div className="button-shine"></div>
            </button>
            
            <p className="cta-note">
              "No solo veas películas, vive la experiencia cinematográfica"
            </p>
          </div>
        </section>
      </div>

      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-element" style={{ '--delay': '0s' }}>🎭</div>
        <div className="floating-element" style={{ '--delay': '2s' }}>🎬</div>
        <div className="floating-element" style={{ '--delay': '4s' }}>🍿</div>
        <div className="floating-element" style={{ '--delay': '6s' }}>⭐</div>
        <div className="floating-element" style={{ '--delay': '8s' }}>🎪</div>
      </div>
    </div>
  );
};

export default Bienvenida;