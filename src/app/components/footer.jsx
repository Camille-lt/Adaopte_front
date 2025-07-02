// src/app/components/navbar/footer.jsx
"use client"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-adaopte">
                    <h2>ADAOPTE</h2>
                    <p>Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal.</p>
                </div>
                <div className="footer-informations">
                    <h2>INFORMATIONS UTILES</h2>
                    <p>FAQs <br /> Conseils d'adoption <br /> Nous contacter <br /> Mentions Légales</p>
                </div>
                <div className="footer-contact"><h2>CONTACT</h2>
                    <p>116 rue du Faubourg Saint-Martin <br /> 75010 Paris, France <br /> Email: contact@adaopte.fr <br /> Tel: +33 1 23 45 67 89</p>
                </div>
                <div>
                    <p>© 2025 Adaopte. Tous droits réservés. <br /> Ce site a été développé dans le cadre d'un projet pour ADA TECH SCHOOL</p>
                </div>
            </div>
        </footer>
    )
}