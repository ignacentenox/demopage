import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Tu Tienda. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="/contacto">Contacto</a>
                    <a href="/politica-privacidad">Política de Privacidad</a>
                    <a href="/terminos-servicio">Términos de Servicio</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;