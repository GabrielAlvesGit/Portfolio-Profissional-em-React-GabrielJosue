import React from "react";
import "./habilidades.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tecnologias from "./Tecnologias";

const Habilidades = () => {
  return (
     <section className="habilidades section" id="habilidades">
          <h2 className="section__title" >Habilidades Técnicas</h2>
          <span className="section__subtitle">Nível de proficiência técnica</span>

          <div className="habilidades__container container grid"> 
              <Frontend />

              <Backend />
              
              <Tecnologias />
          </div>
     </section>
  );
}

export default Habilidades;