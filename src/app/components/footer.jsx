// src/app/components/navbar/footer.jsx
"use client"

export default function Footer() {
    return (

<footer style={{ backgroundColor: '#46736E', color: '#FFFFFF', padding: '3rem 2rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Bloc ADAOPTE */}
        <div style={{ flex: '1 1 250px' }}>
          <h2 style={{ color: '#F2CB9B', fontSize: '1.5rem', marginBottom: '1rem' }}>ADAOPTE</h2>
          <p>
            Notre mission est de trouver des foyers aimants pour chaque animal abandonné
            et de promouvoir le bien-être animal.
          </p>
        </div>

        {/* Bloc infos */}
        <div style={{ flex: '1 1 200px' }}>
          <h2 style={{ color: '#F2CB9B', fontSize: '1.2rem', marginBottom: '1rem' }}>Informations utiles</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
            <li><a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>FAQs</a></li>
            <li><a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Conseils d'adoption</a></li>
            <li><a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Nous contacter</a></li>
            <li><a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Mentions légales</a></li>
          </ul>
        </div>

        {/* Bloc contact */}
        <div style={{ flex: '1 1 200px' }}>
          <h2 style={{ color: '#F2CB9B', fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h2>
          <p>
            116 rue du Faubourg Saint-Martin<br />
            75010 Paris, France<br />
            Email : <a href="mailto:contact@adaopte.fr" style={{ color: '#FFFFFF' }}>contact@adaopte.fr</a><br />
            Tél : +33 1 00 00 00 00
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '0.9rem',
          borderTop: '1px solid #F2CB9B',
          paddingTop: '1.5rem',
        }}
      >
        <p>
          © 2025 Adaopte. Tous droits réservés.<br />
          Ce site a été développé dans le cadre d’un projet pour Ada Tech School.
        </p>
      </div>
    </footer>
    )
}