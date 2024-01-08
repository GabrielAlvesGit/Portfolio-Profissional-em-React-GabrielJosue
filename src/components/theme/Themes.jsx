import React, { useEffect, useState } from "react";
import {themes} from "../project/Data";
import ThemeItem from "./ThemeItem";
import {FaCog} from "react-icons/fa";
import {BsMoon , BsSun}  from "react-icons/bs";
import "./themes.css";

// Guarda armazenada no LocalStorage, retorna uma string vazia se não houver cor definida  
const getStorageColor = () => {
  let color = '';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }

  return color;
}

// Guarda armazenada no LocalStorage, Tema Dark e Light
const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }

  return theme;
}

// Função que muda a cor do tema
const Themes =  () => {
   // Estado para armazenar a cor selecionada pelo usuário
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  // Função para atualizar a cor quando o usuário escolhe um tema
  const changeColor = (color) => {
    setColor(color);
    setShowSwitcher(false); // Fecha quando o usuário escolhe uma cor
  };

  const togglerTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }

    setShowSwitcher(false); // Fecha quando o usuário troca o tema
  };
  
  // Efeito colateral que atualiza a cor no CSS e armazena no LocalStorage
  useEffect(() => {
    // Atualiza a cor no CSS
    document.documentElement.style.setProperty('--title-color', color);
  
    // Armazena a cor no LocalStorage
    localStorage.setItem('color', color);
  }, [color]);

   // Efeito colateral Dark e li que atualiza a cor no CSS e armazena no LocalStorage
  useEffect(() => {
    // Atualiza a cor no CSS
    document.documentElement.className = theme ;

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fecha o seletor de cores quando o usuário clica fora dele
  const handleSwitcherClick = (e) => {
    if (!e.target.closest('.style__switcher')) {
      setShowSwitcher(false);
    }
  };

  // Fecha o seletor de cores quando o usuário clica fora dele
  useEffect(() => {
    document.addEventListener("click", handleSwitcherClick);
    return () => {
      document.removeEventListener("click", handleSwitcherClick);
    };
  }, [showSwitcher]);

  return(
    <div onClick={handleSwitcherClick}>
        <div className={`${showSwitcher ? 'show-switcher ' : ''}style__switcher`}
        >
            <div className="style__switcher-toggler" 
            onClick={() => setShowSwitcher (!showSwitcher)}
          >
            <FaCog />
          </div>

          <div className="theme__toggler" onClick={togglerTheme}>
            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
          </div>

          <h3 className="style__switcher-title">Style Switcher</h3>
          <div className="style__switcher-items">
            {themes.map((themes, index) => {
              return(
                <ThemeItem key={index} {...themes} changeColor={changeColor} />
              ); 
            })}
          </div>
          
          <div className="style__switcher-close"
            onClick={() => setShowSwitcher (!showSwitcher)}
          >
            &times;</div>
        </div>
    </div>
  );
};

export default Themes;