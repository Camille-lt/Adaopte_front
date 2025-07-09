"use client"
"use client"
export default function DevenirBenevole() {
   return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
    }}>
      <h1 style={{
        marginBottom: '2rem',
        fontSize: '2rem',
        textAlign: 'center',
        color: '#46736E',
      }}>
        Devenir Bénévole
      </h1>

      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <label style={{ fontWeight: 'bold' }}>
          Prénom :
          <input type="text" name="prenom" style={inputStyle} />
        </label>

         <label style={{ fontWeight: 'bold' }}>
          Nom :
          <input type="text" name="nom" style={inputStyle} />
        </label>

        <label style={{ fontWeight: 'bold' }}>
          Email :
          <input type="email" name="email" style={inputStyle} />
        </label>

        <label style={{ fontWeight: 'bold' }}>
          Ville :
          <input type="text" name="ville" style={inputStyle} />
        </label>

        <label style={{ fontWeight: 'bold' }}>
          Code postale:
          <input type="text" name="cp" style={inputStyle} />
        </label>

        <label style={{ fontWeight: 'bold' }}>
          Disponibilités :
          <select name="disponibilites" style={{ ...inputStyle }}>
            <option value="">-- Choisissez une option --</option>
            <option value="1_fois">1 fois / semaine</option>
            <option value="2_3_fois">2 à 3 fois / semaine</option>
            <option value="plus_de_3">Plus de 3 fois / semaine</option>
            <option value="tous_les_jours">Je suis disponible tous les jours</option>
          </select>
        </label>

        <label style={{ fontWeight: 'bold' }}>
          Pourquoi voulez-vous devenir bénévole ?
          <textarea name="motivation" rows="10" style={inputStyle}></textarea>
        </label>

        <button type="submit" style={{
          backgroundColor: '#46736E',
          color: '#fff',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Envoyer ma candidature
        </button>
      </form>
    </main>
  );
}

// Styles pour les inputs
const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginTop: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
};
