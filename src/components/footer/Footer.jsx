import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <a href="https://www.facebook.com" className="footer__social-icon">
          Facebook
          </a>
          <a href="https://www.twitter.com" className="footer__social-icon">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="footer__social-icon">
            Instagram
          </a>
        </div>
        <div className="footer__links">
          <a href="https://github.com/AdonayLorenzo/StarWars" className="footer__link">GitHub</a>
          <a href="https://www.figma.com/community/file/1035612749244820645/101-free-website-headers-for-web-design-v1-2" className="footer__link">Figma</a>
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