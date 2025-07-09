"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Vérifie la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        {/* Burger uniquement sur mobile */}
        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              fontSize: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <div style={{ width: 25, height: 3, backgroundColor: '#333' }} />
            <div style={{ width: 25, height: 3, backgroundColor: '#333' }} />
            <div style={{ width: 25, height: 3, backgroundColor: '#333' }} />
          </button>
        ) : (
          // Menu visible directement sur desktop
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '1rem',
            margin: 0,
            padding: 0
          }}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/jadopte">J'adopte</Link></li>
            <li><Link href="/guide-adoption">Guide de l'adoption</Link></li>
            <li><Link href="/devenir-benevole">Devenir bénévole</Link></li>
            <li><Link href="/faire-un-don">Faire un don</Link></li>
          </ul>
        )}
      </div>

      {/* Menu déroulant en mobile */}
        {isMobile && isOpen && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    color: 'black',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Bouton croix */}
    <button
      onClick={() => setIsOpen(false)}
      aria-label="Fermer le menu"
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '2rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#333'
      }}
    >
      &times;
    </button>

    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '3.5rem',
      fontSize: '1.4rem'
    }}>
      <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
      <li><Link href="/jadopte" onClick={() => setIsOpen(false)}>J'adopte</Link></li>
      <li><Link href="/guide-adoption" onClick={() => setIsOpen(false)}>Guide de l'adoption</Link></li>
      <li><Link href="/devenir-benevole" onClick={() => setIsOpen(false)}>Devenir bénévole</Link></li>
      <li><Link href="/faire-un-don" onClick={() => setIsOpen(false)}>Faire un don</Link></li>
    </ul>
  </div>
)}
    </nav>
  );
}
