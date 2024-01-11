import React from "react";
import "./habilidades.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tecnologias from "./Tecnologias";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Habilidades = () => {
  // Importar o i18n para traduzir o texto
  const {t} = useTranslation();
  return (
     <section className="habilidades section" id="habilidades">
          <h2 className="section__title" >{t('habilidades.title')}</h2>
          <span className="section__subtitle">{t('habilidades.subtitle')}</span>

          <div className="habilidades__container container grid"> 
              <Frontend />

              <Backend />
              
              <Tecnologias />
          </div>
     </section>
  );
}

export default Habilidades;