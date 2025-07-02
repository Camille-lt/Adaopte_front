// src/app/components/navbar/Navbar.jsx
"use client"

import Link from 'next/link';

export default function Navbar() {
    return (
       <nav style={{ padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
  <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
    <li>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
        Accueil
      </Link>
    </li>
    <li>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
        J'adopte
      </Link>
    </li>
    <li>
      <Link href="/guide-adoption" style={{ color: 'white', textDecoration: 'none' }}>
        Guide de l'adoption
      </Link>
    </li>
    <li>
      <Link href="/devenir-benevole" style={{ color: 'white', textDecoration: 'none' }}>
        Devenir bénévole
      </Link>
    </li>
    <li>
      <Link href="/faire-un-don" style={{ color: 'white', textDecoration: 'none' }}>
        Faire un don
      </Link>
    </li>
  </ul>
</nav>
    )
}