import React, { useState } from "react";
import "./qualificacao.css";

const Qualificacao = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualificacao section" id="sobre">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Jornada Acadêmica/Experiência</span>

      <div className="qualificacao__container container">
        <div className="qualificacao__tabs">
          <div
            className={
              toggleState === 1
                ? "qualificacao__button qualificacao__active button--flex"
                : "qualificacao__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualificacao__icon"></i> Formação acadêmica
          </div>

          <div
            className={
              toggleState === 2
                ? "qualificacao__button qualificacao__active button--flex"
                : "qualificacao__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualificacao__icon"></i> Experiência
          </div>
        </div>

        
        <div className="qualificacao__sections">
          {/* Acadêmico */}
          <div
            className={
              toggleState === 1
                ? "qualificacao__content qualificacao__content-active"
                : "qualificacao__content"
            }
          >
            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">Análise e Dev de Sistemas</h3>
                <span className="qualificacao__subtitle">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP - São Paulo/SP</span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2022 Até 07/2025 - Cursando
                </div>
              </div>

              <div>
                <span className="qualificacao__rounder"></span>
                <span className="qualificacao__line"></span>
              </div>
            </div>

            <div className="qualificacao__data">
                  <div></div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>

                  <div>
                    <h3 className="qualificacao__title">Técnico em Informática</h3>
                    <span className="qualificacao__subtitle">Senac Brasil -<br />
                    São Paulo/SP</span>
                    <div className="qualificacao__calendar">
                      <i className="uil uil-calendar-alt"></i> 08/2020 Até 05/2022 - Completo
                    </div>
                  </div>
            </div>

            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">Ensino Médio</h3>
                <span className="qualificacao__subtitle">Escola Estadual Samuel Wainer - São Paulo/SP</span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - Completo
                </div>
              </div>

            <div>
              <span className="qualificacao__rounder"></span>
              <span className="qualificacao__line"></span>
            </div>
            </div>
          </div>

          {/* Experiência */}
          <div
            className={
              toggleState === 2
                ? "qualificacao__content qualificacao__content-active"
                : "qualificacao__content"
            }
          >
            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">Jovem Aprendiz Legal em Logística</h3>
                <span className="qualificacao__subtitle">Matéria Prima Farmácia de Manipulação Ltda -
                São Paulo/SP</span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2019 Até 08/2020 - Completo
                </div>
              </div>

              <div>
                <span className="qualificacao__rounder"></span>
                <span className="qualificacao__line"></span>
              </div>
            </div>

            <div className="qualificacao__data">
                  <div></div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>

                  <div>
                    <h3 className="qualificacao__title">Jovem Aprendiz de Reposição</h3>
                    <span className="qualificacao__subtitle">Akkí Atacadista -<br />
                    São Paulo/SP</span>
                    <div className="qualificacao__calendar">
                      <i className="uil uil-calendar-alt"></i> 07/2017 Até 06/2018 - Completo
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificacao;
