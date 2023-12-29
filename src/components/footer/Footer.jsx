import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alves</h1>

        <ul className="footer__list">
          <li>
            <a href="#sobre" className="footer__link">Sobre</a>
          </li>

          <li>
            <a href="#projetos" className="footer__link">Projetos</a>
          </li>

          <li>
            <a href="#contato" className="footer__link">Contato</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/gabrielalves.s/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://gabrielalvesgit.github.io/Loading/" className="footer__social-link" target="_blank">
            <i className="bx bxl-dribbble"></i>
          </a>

          <a href="https://github.com/GabrielAlvesGit" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
            
          </a>

          <a href="#" className="footer__social-link" target="_blank">
            <i class='bx bxl-youtube'></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Gabriel Josué Alves <tspan>&lt;/&gt; .</tspan> 
        </span>
      </div>
    </footer>
  );
}

export default Footer;