"use client"
export default function GuideAdoption() {

  const bannerAdoptURL = 'https://i.pinimg.com/736x/e5/15/a5/e515a509fac7260f67ae42e844f8cc6a.jpg'

  return (


    <main style={{ maxWidth: 960, margin: '0 auto', paddingBottom: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#46736E' }}>Guide de l'adoption</h1>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        paddingBottom: '2rem',
        marginBottom: '5rem' // <-- Réserve de l’espace pour le bloc chevauchant
      }}>
        <img
          src={bannerAdoptURL}
          alt="Bannière animaux"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '30px',
          }}
        />

        <div style={{
          position: 'absolute',
          bottom: '-50px', // dépasse légèrement
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          maxWidth: 600,
          width: '110%',
          color: '#46736E',
          textAlign: 'center',
          zIndex: 3,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}>
          <p style={{ fontSize: '1.1rem', margin: 0, color:'#46736E'}}>
            <b>Adopter un animal</b>, c'est <b>offrir une seconde chance </b> à un compagnon qui mérite <b>amour et sécurité.</b>
            C'est <b>un engagement sur le long terme</b>, pour <b>lequel nous vous accompagnons pas à pas.</b>
          </p>
        </div>
      </div>

      <section className="how-it-works" style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#F2785C', marginBottom: '1.5rem', paddingTop: '2rem', marginTop: '2rem', margin: 'auto', paddingBottom:'1.5rem'}}>COMMENT ÇA MARCHE</h3>
        <p style={{ paddingBottom: '1.5rem', marginBottom: '1rem', lineHeight: 1.5, color: '#46736E' }}>
          Vous l'aurez compris adopter un animal est un engagement sérieux et à long terme !<br />
          Alors lancez-vous dans l'une des plus belle aventure de votre vie, celle d'accompagner un petit animal qui ne recherche qu'à rejoindre un foyer aimant.</p>
        <p style={{ paddingBottom: '1.5rem', lineHeight: 1.5, color: '#46736E' }}>
          Voici notre processus d'adoption en quelques étapes simples :
        </p>
        <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', paddingBottom:'4rem' }}>
          {[{
            icon: "/icons/loupe-1.png",
            title: "1. Trouver votre compagnon",
            text: "Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie."
          }, {
            icon: "/icons/formulaire-denquete-1.png",
            title: "2. Remplissez une demande",
            text: "Soumettez votre formulaire d'adoption pour l'animal qui vous interesse. Nous examinons chaque demande avec soin."
          }, {
            icon: "/icons/agitant-la-main.png",
            title: "3. Rencontrez l'animal",
            text: "Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus."
          }, {
            icon: "/icons/maison-1 copie.png",
            title: "4. Bienvenue à la maison",
            text: "Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller."
          }].map(({ icon, title, text }) => (
            <div
              key={title}
              style={{
                flex: '1 1 250px',
                backgroundColor: '#EBF1F2',
                borderRadius: 8,
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                color: '#46736E',
                textAlign: 'left'
              }}
            >
              <img src={icon} alt={title} style={{ width: 50, marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.75rem', color: '#F2785C' }}>{title}</h4>
              <p style={{ fontSize: '1rem', lineHeight: 1.4 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}