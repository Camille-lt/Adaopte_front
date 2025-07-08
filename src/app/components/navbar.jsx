// src/app/components/navbar/Navbar.jsx
"use client"

import Link from 'next/link';
import { useEffect, useState} from 'react';
import { createIcons, icons } from 'lucide';
import styles from '../navbar.module.css';

export default function Navbar() {
  useEffect(() => {
    // Crée les icônes après le montage du composant
    createIcons({ icons });
  }, []);

  // Pour que la navbar se déplie et se replie
        // const menuHamburger = document.querySelector(".menu-hamburger")
        // const navLinks = document.querySelector(".nav-links")
 
        // menuHamburger.addEventListener('click',()=>{
        // navLinks.classList.toggle('mobile-menu')
        // })

    return (
       <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
  <ul className={styles.navbarLinks}>
    <li>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
        Accueil
      </Link>
    </li>
    <li>
      <Link href="/jadopte" style={{ color: 'white', textDecoration: 'none' }}>
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
  </div>
  <i className='menu' data-lucide="menu"></i>
</nav>
    )
}
