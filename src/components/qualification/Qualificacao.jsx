import React, { useState } from "react";
import "./qualificacao.css";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Qualificacao = () => {
  const [toggleState, setToggleState] = useState(1);
  // Importar o i18n para traduzir o texto
  const {t} = useTranslation();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualificacao section" id="qualificacao">
      <h2 className="section__title">{t('qualificacao.title')}</h2>
      <span className="section__subtitle">{t('qualificacao.subtitle')}</span>

      <div className="qualificacao__container container">
        <div className="qualificacao__tabs">
           {/* title btn Formação acadêmica */}
          <div
            className={
              toggleState === 1
                ? "qualificacao__button qualificacao__active button--flex"
                : "qualificacao__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualificacao__icon"></i> 
              {t('qualificacao.qualificacao__buttonFormacao')}
          </div>

           {/* title btn Experiência */}
          <div
            className={
              toggleState === 2
                ? "qualificacao__button qualificacao__active button--flex"
                : "qualificacao__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualificacao__icon"></i> 
              {t('qualificacao.qualificacao__buttonExperiencia')}
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
             {/* Análise e Dev de Sistemas - Instituto Federal  */}
            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">
                  {t('qualificacao.titleFormacaoAnáliseSistemas')}
                </h3>
                <span className="qualificacao__subtitle">
                  {t('qualificacao.subtitleInstitutoFederal')}
                </span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i> 
                  {t('qualificacao.calendarFormacaoAnáliseSistemas')}
                </div>
              </div>

              <div>
                <span className="qualificacao__rounder"></span>
                <span className="qualificacao__line"></span>
              </div>
            </div>
            
            {/* Técnico em Informática - Senac Brasil  */}
            <div className="qualificacao__data">
                  <div></div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>

                  <div>
                    <h3 className="qualificacao__title">
                      {t('qualificacao.titleFormacaoTI')}
                    </h3>
                     {/* Unica maneira de quebra a linha */}
                    <span className="qualificacao__subtitle">
                      {t('qualificacao.subtitleSenacBrasil').split('\n').map((item, key) => 
                        <React.Fragment key={key}>{item}<br/></React.Fragment>
                      )}
                    </span>
                    <div className="qualificacao__calendar">
                      <i className="uil uil-calendar-alt"></i> 
                       {t('qualificacao.calendarFormacaoTI')}
                    </div>
                  </div>
            </div>
            
            {/* Ensino Médio - Escola Estadual Samuel  */}
            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">
                  {t('qualificacao.titleFormacaoEnsinoMedio')}
                </h3>
                <span className="qualificacao__subtitle">
                  {t('qualificacao.subtitleEnsinoMedio')}
                </span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  {t('qualificacao.calendarFormacaoEnsinoMedio')} 
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
            {/* Jovem Aprendiz Legal em Logística - Matéria Prima Farmácia  */}
            <div className="qualificacao__data">
              <div>
                <h3 className="qualificacao__title">
                  {t('qualificacao.titleExperiênciaJVLogistica')}
                </h3>
                <span className="qualificacao__subtitle">
                  {t('qualificacao.subtitleExperiênciaMateriaFarmacia')}
                </span>
                <div className="qualificacao__calendar">
                  <i className="uil uil-calendar-alt"></i> 
                  {t('qualificacao.calendarExperiênciaJVLogistica')}
                </div>
              </div>

              <div>
                <span className="qualificacao__rounder"></span>
                <span className="qualificacao__line"></span>
              </div>
            </div>

            {/* Jovem Aprendiz de Reposição - Akkí Atacadista */}
            <div className="qualificacao__data">
                  <div></div>

                  <div>
                    <span className="qualificacao__rounder"></span>
                    <span className="qualificacao__line"></span>
                  </div>

                  <div>
                    <h3 className="qualificacao__title">
                      {t('qualificacao.titleExperiênciaJVReposicao')}
                    </h3>
                    {/* Unica maneira de quebra a linha */}
                    <span className="qualificacao__subtitle"> 
                      {t('qualificacao.subtitleExperiênciaAkkiAtacadista').split('\n').map((item, key) => 
                        <React.Fragment key={key}>{item}<br/></React.Fragment>
                      )}
                    </span>
                    <div className="qualificacao__calendar">
                      <i className="uil uil-calendar-alt"></i> 
                      {t('qualificacao.calendarExperiênciaJVReposicao')}
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
