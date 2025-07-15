'use client';


export default function Button({ onClick, children, style = {} }) {
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
       marginTop: '1.5rem',
       ...style, // Permet de changer le style de certains buttons
     }}
   >
     {children}
   </button>
 );
}
