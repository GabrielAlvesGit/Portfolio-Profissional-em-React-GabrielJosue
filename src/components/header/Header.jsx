import React, {useState} from "react";
import "./header.css"
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Header = () =>{
      /*=============== Change Backgroud Header  ===============*/   
     //Evento de exbir o Scroll quando o usuario estiver scrolando 
     window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      //Quando o Scroll tiver em 200 viewport vai exibir 
      if (this.scrollY >= 80) header.classList.add
      ("scroll-header"); 
      else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    // Importar o i18n para traduzir o texto
    const {t} = useTranslation();

    return (
      
          <header className="header">
              <nav className="nav container">
                  <a href="index.html" className="nav__logo">
                      <div className="logo-text">
                        <tspan>&lt;</tspan> 
                        Alves  
                        <tspan>/</tspan> 
                        <tspan>&gt;.</tspan>
                      </div>
                  </a>
                  
                  <div className={Toggle ? "nav__menu show-menu" : 
                  "nav__menu"}>
                    <ul className="nav__list grid">
                      <li className="nav__item">
                          <a 
                            href="#home" 
                            onClick={() => setActiveNav ('#home')} 
                            className={
                              activeNav === "#home" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          >
                            <i className="uil uil-estate nav__icon"></i> {t('header.home')}
                          </a>
                      </li>

                      <li className="nav__item">
                          <a 
                            href="#sobre" 
                            // Deixar em negrito quando o campo for clicado 
                            onClick={() => setActiveNav ("#sobre")} 
                            className={
                              activeNav === "#sobre" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          > 
                            <i className="uil uil-user nav__icon"></i> {t('header.sobre')}
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#habilidades" 
                            // Deixar em negrito quando o campo for clicado 
                            onClick={() => setActiveNav ("#habilidades")} 
                            className={
                              activeNav === "#habilidades" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          > 
                            <i className="uil uil-file-alt nav__icon"></i> {t('header.habilidades')}
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#projetos"
                            // Deixar em negrito quando o campo for clicado 
                            onClick={() => setActiveNav ("#projetos")} 
                            className={
                              activeNav === "#projetos" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          > 
                            <i className="uil uil-briefcase-alt nav__icon"></i> {t('header.projetos')}
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#footer"
                            // Deixar em negrito quando o campo for clicado 
                            onClick={() => setActiveNav ("#footer")} 
                            className={
                              activeNav === "#footer" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          >  
                            <i className="uil uil-scenery nav__icon"></i> {t('header.rodapé')}
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#contato" 
                            // Deixar em negrito quando o campo for clicado 
                            onClick={() => setActiveNav ("#contato")} 
                            className={
                              activeNav === "#contato" ? "nav__link active-link" 
                              : "nav__link"
                            }
                          > 
                            <i className="uil uil-message nav__icon"></i> {t('header.contato')}
                          </a>
                      </li>
                    </ul>

                    {/*=============== Fechar o menu ===============*/}
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                  </div> 
                  
                  {/*=============== Vai abrir menu ===============*/}
                  <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                  </div>
              </nav>
          </header>
  );
}

export default Header;