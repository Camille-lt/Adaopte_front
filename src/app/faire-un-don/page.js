"use client"

import { useState } from "react";

export default function FaireUnDon() {
  const [don, setDon] = useState({
    name: '',
    email: '',
    amount: '',
    method: 'carte'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDon(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu pourras ici envoyer les données à ton backend ou à un service de paiement
    alert(`Merci ${don.name} pour votre don de ${don.amount}€ via ${don.method} ❤️`);
  };

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Faire un don</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Votre soutien permet à notre refuge de sauver et soigner des animaux abandonnés. Chaque don compte 🐾
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Prénom :
          <input
            type="text"
            name="name"
            value={don.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
        </label>

        <label>
          Email :
          <input
            type="email"
            name="email"
            value={don.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
        </label>

        <label>
          Montant (€) :
          <input
            type="number"
            name="amount"
            value={don.amount}
            onChange={handleChange}
            required
            min="1"
            step="1"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          />
        </label>

        <label>
          Méthode de paiement :
          <select
            name="method"
            value={don.method}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }}
          >
            <option value="carte">Carte bancaire</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>

        <button type="submit" style={{
          backgroundColor: "#F2CB9B",
          color: "#333",
          padding: "0.75rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "2rem"
        }}>
          Faire un don
        </button>
      </form>
    </main>
  );
}
