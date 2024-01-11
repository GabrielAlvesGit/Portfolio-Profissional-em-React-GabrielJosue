import React from "react";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Tecnologias = () => {
    // Importar o i18n para traduzir o texto
    const {t} = useTranslation();
    return (
      <div className="habilidades__content "> 
          <h3 className="habilidades__title">{t('tecnologiashabilidades.title')}</h3>

          <div className="habilidades__box">
            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Windows/Linux</h3>
                  <span className="habilidades__level">{t('tecnologiashabilidades.levelAvancado')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">V.Studio Code</h3>
                  <span className="habilidades__level">{t('tecnologiashabilidades.levelAvancado')}</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Eclipse</h3>
                  <span className="habilidades__level">{t('tecnologiashabilidades.levelIntermediario')}</span>
                </div>
              </div>
              
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Figma</h3>
                  <span className="habilidades__level">{t('tecnologiashabilidades.levelIntermediario')}</span>
                </div>
              </div>
            </div>
              
              <div className="habilidades__group">
                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Django</h3>
                    <span className="habilidades__level">{t('tecnologiashabilidades.levelBasico')}</span>
                  </div>
                </div>

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Canva</h3>
                    <span className="habilidades__level">{t('tecnologiashabilidades.levelIntermediario')}</span>
                  </div>
                </div>

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Microsoft Teams</h3>
                    <span className="habilidades__level">{t('tecnologiashabilidades.levelIntermediario')}</span>
                  </div>
                </div> 

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">{t('tecnologiashabilidades.titleEntreoutros')}</h3>
                    <span className="habilidades__level"></span>
                  </div>
                </div>              
              </div>
          </div>
      </div>
    )
}

export default Tecnologias;