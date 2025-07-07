// src/app/components/navbar/Navbar.jsx
"use client"

import Link from 'next/link';

export default function Navbar() {
  
    return (
       <nav style={{ padding: '1rem', backgroundColor: '#EBF1F2', color: '#fff' }}>
  <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
    <li>
      <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>
        Accueil
      </Link>
    </li>
    <li>
      <Link href="/jadopte" style={{ color: 'black', textDecoration: 'none' }}>
        J'adopte
      </Link>
    </li>
    <li>
      <Link href="/guide-adoption" style={{ color: 'black', textDecoration: 'none' }}>
        Guide de l'adoption
      </Link>
    </li>
    <li>
      <Link href="/devenir-benevole" style={{ color: 'black', textDecoration: 'none' }}>
        Devenir bénévole
      </Link>
    </li>
    <li>
      <Link href="/faire-un-don" style={{ color: 'black', textDecoration: 'none' }}>
        Faire un don
      </Link>
    </li>
  </ul>
</nav>
    )
}