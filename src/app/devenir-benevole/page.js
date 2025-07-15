"use client";
import { useState } from "react";

export default function DevenirBenevole() {
  const [formVisible, setFormVisible] = useState(false);
  const bannerAdoptURL =
    "https://i.pinimg.com/736x/b6/f3/63/b6f363a737f49fad974df53378308e42.jpg";

  return (
    <main
      style={{
        display: "flex",
        maxWidth: '960px',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: '4rem'
      }}
    >
      <h1
        style={{
          marginBottom: "2rem",
          fontSize: "2rem",
          textAlign: "center",
          color: "#46736E",
        }}
      >
        Devenir Bénévole
      </h1>

       <img
                    src={bannerAdoptURL}
                    alt="Bannière animaux"
                    style={{
                        width: '928px',
                        height:'500px',
                        objectFit: 'cover',
                        borderRadius: '30px',
                    }}
                />
      <section style={{ textAlign: 'left', paddingTop:'4rem' }}>
        <h3 style={{ textAlign: 'left', color: '#F2785C', marginBottom: '1.5rem', paddingTop: '1.5rem' }}>REJOIGNEZ NOS EQUIPES ET SOUTENEZ NOS ANIMAUX</h3>
        <p style={{ paddingBottom: '1.5rem', lineHeight: 1.5, color: '#555555' }}>
          Chez <b>Adaopte</b>, nous croyons en <strong>la force du collectif</strong> pour <strong>améliorer le bien-être animal.</strong><br />
          Devenir bénévole, <strong>c’est contribuer concrètement</strong> à <strong>la protection, aux soins et au placement des animaux en refuge.</strong> <br />
        Que ce soit par des <strong>actions sur le terrain</strong>, de <strong>l’aide logistique </strong>ou de la <strong>sensibilisation,</strong> <strong>chaque engagement compte.</strong><br />
        </p>
        <p style={{ paddingBottom: '2rem', lineHeight: 1.5, color: "#46736E" }}><strong>Rejoignez notre équipe bienveillante et agissez à votre rythme pour faire la différence.</strong></p>

      </section>
      <button
        onClick={() => setFormVisible((prev) => !prev)}
        style={{
          backgroundColor: "#F2785C",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "30px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "1.5rem",
        }}
      >
        {formVisible ? "Masquer le formulaire" : "Remplir le formulaire"}
      </button>

      {/* ✅ Conteneur avec marge conditionnelle */}
      <div style={{ marginBottom: formVisible ? "5rem" : "0" }}>
        {formVisible && (
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "rgb(235, 241, 242)",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <label style={{ fontWeight: "bold", color: "rgb(242, 120, 92)" }}>
              Prénom :
              <input type="text" name="prenom" style={inputStyle} />
            </label>

            <label style={{ fontWeight: "bold", color: "rgb(242, 120, 92)" }}>
              Nom :
              <input type="text" name="nom" style={inputStyle} />
            </label>

            <label style={{ color: "rgb(242, 120, 92)" }}>
              Email :
              <input type="email" name="email" style={inputStyle} />
            </label>

            <label style={{ color: "rgb(242, 120, 92)" }}>
              Ville :
              <input type="text" name="ville" style={inputStyle} />
            </label>

            <label style={{ color: "rgb(242, 120, 92)" }}>
              Code postale:
              <input type="text" name="cp" style={inputStyle} />
            </label>

            <label style={{ fontWeight: "bold", color: "rgb(242, 120, 92)" }}>
              Disponibilités :
              <select
                name="disponibilites"
                style={{ ...inputStyle, color: "#afa2a2fd" }}
              >
                <option value="">-- Choisissez une option --</option>
                <option value="1_fois">1 fois / semaine</option>
                <option value="2_3_fois">2 à 3 fois / semaine</option>
                <option value="plus_de_3">Plus de 3 fois / semaine</option>
                <option value="tous_les_jours">
                  Je suis disponible tous les jours
                </option>
              </select>
            </label>

            <label style={{ fontWeight: "bold", color: "rgb(242, 120, 92)" }}>
              Pourquoi voulez-vous devenir bénévole ?
              <textarea
                name="motivation"
                rows="10"
                style={inputStyle}
              ></textarea>
            </label>

            <button
              type="submit"
              style={{
                backgroundColor: "#46736E",
                color: "#fff",
                padding: "0.75rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Envoyer ma candidature
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

// Style des inputs
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  marginTop: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "1rem",
};
