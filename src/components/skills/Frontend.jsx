import React from "react";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Frontend = () => {
    // Importar o i18n para traduzir o texto
    const {t} = useTranslation();
    return (
          <div className="habilidades__content "> 
          <h3 className="habilidades__title">{t('frontendhabilidades.title')}</h3>

          <div className="habilidades__box">
            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">HTML</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelAvancado')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">CSS</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelAvancado')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">JavaScript</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelIntermediario')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Bootstrap</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelBasico')}</span>
                </div>
              </div>
            </div>

            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Git</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelBasico')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Angula</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelBasico')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">React</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelBasico')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Vue.js</h3>
                  <span className="habilidades__level">{t('frontendhabilidades.levelBasico')}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Frontend;