'use client'; // Important pour que ce soit un composant client (interactif)

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#416D6C',
        color: 'white',
        border: 'none',
        borderRadius: '56px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}