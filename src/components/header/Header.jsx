import React, {useState} from "react";
import "./header.css"

const Header = () =>{
    /*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);
    
  return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    <div class="logo-text">
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
                        <a href="#home" className="nav__link active-link">
                          <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#sobre" className="nav__link">
                          <i className="uil uil-user nav__icon"></i> Sobre
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#habilidades" className="nav__link">
                          <i className="uil uil-file-alt nav__icon"></i> Habilidades
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#project" className="nav__link">
                          <i className="uil uil-briefcase-alt nav__icon"></i> Projetos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#potfolio" className="nav__link">
                          <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                          <i className="uil uil-message nav__icon"></i> Contato
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