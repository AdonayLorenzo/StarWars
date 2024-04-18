import React from 'react';
import './Footer.css';
import Facebook from './facebook.png';
import Twitter from './twitter.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="https://www.facebook.com/mango" className="footer__social-icon">
          Facebook
          </a>
          <a href="https://www.twitter.com/mango" className="footer__social-icon">
            Twitter
          </a>
          <a href="https://www.instagram.com/mango" className="footer__social-icon">
            Instagram
          </a>
        </div>
        <div className="footer__links">
          <a href="https://github.com/your-username" className="footer__link">GitHub</a>
          <a href="https://www.figma.com/file/your-file-id" className="footer__link">Figma</a>
        </div>
        <br/>
        <a className="footer__copyright" href="/Privacity">
          © 2023 L7E Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta
        </a>
      </div>
    </footer>
  );
};

export default Footer;