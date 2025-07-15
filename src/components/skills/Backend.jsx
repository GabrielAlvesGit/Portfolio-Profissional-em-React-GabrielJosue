import React from "react";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Backend = () => {
    // Importar o i18n para traduzir o texto
    const {t} = useTranslation();
    return (
          <div className="habilidades__content "> 
          <h3 className="habilidades__title">{t('backendhabilidades.title')}</h3>

          <div className="habilidades__box">
            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Java</h3>
                  <span className="habilidades__level">{t('backendhabilidades.levelIntermediario')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">C++</h3>
                  <span className="habilidades__level">{t('backendhabilidades.levelBasico')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">PHP</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelIntermediario')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Python</h3>
                  <span className="habilidades__level">{t('backendhabilidades.levelBasico')}</span>
                </div>
              </div>
            </div>

            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">SQL/MySQL</h3>
                  <span className="habilidades__level">{t('backendhabilidades.levelIntermediario')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">MySQL</h3>
                  <span className="habilidades__level">{t('backendhabilidades.levelIntermediario')}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Backend;