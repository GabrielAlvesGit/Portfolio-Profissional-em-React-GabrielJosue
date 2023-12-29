import React from "react";

const Tecnologias = () => {
    return (
      <div className="habilidades__content "> 
          <h3 className="habilidades__title">Tecnologias</h3>

          <div className="habilidades__box">
            <div className="habilidades__group">
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Windows/Linux</h3>
                  <span className="habilidades__level">Avançado</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">V.Studio Code</h3>
                  <span className="habilidades__level">Avançado</span>
                </div>
              </div>

              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Eclipse</h3>
                  <span className="habilidades__level">Intermediário</span>
                </div>
              </div>
              
              <div className="habilidades__data">
                <i class='bx bx-badge-check'></i>

                <div>
                  <h3 className="habilidades__name">Figma</h3>
                  <span className="habilidades__level">Intermediário</span>
                </div>
              </div>
            </div>
              
              <div className="habilidades__group">
                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Django</h3>
                    <span className="habilidades__level">Básico</span>
                  </div>
                </div>

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Canva</h3>
                    <span className="habilidades__level">Intermediário</span>
                  </div>
                </div>

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Microsoft Teams</h3>
                    <span className="habilidades__level">Intermediário</span>
                  </div>
                </div> 

                <div className="habilidades__data">
                  <i class='bx bx-badge-check'></i>

                  <div>
                    <h3 className="habilidades__name">Entre outros</h3>
                    <span className="habilidades__level"></span>
                  </div>
                </div>              
              </div>
          </div>
      </div>
    )
}

export default Tecnologias;