import React from "react";

const Informacoes = () => {
  return (
    <div className="sobre__informacoes grid">
      <div className="sobre__box">
        <i class='bx bx-award sobre__icon'></i>
        <h3 className="sobre__title">Experiência</h3>
        <span className="sobre__subtitle">1 Ano de conhecimento</span>
      </div>
      
      <div className="sobre__box">
        <i class='bx bx-briefcase-alt sobre__icon' ></i>
        <h3 className="sobre__title">Concluído</h3>
        <span className="sobre__subtitle"> 15 + Projetos</span>
      </div>

      <div className="sobre__box">
        <i class='bx bx-support sobre__icon' ></i>
        <h3 className="sobre__title">Suporte</h3>
        <span className="sobre__subtitle">On-line 24/7</span>
      </div>
    </div>
  )
}

export default Informacoes;