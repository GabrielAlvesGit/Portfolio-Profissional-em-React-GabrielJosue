import React from "react";

const Informacoes = () => {
  return (
    <div className="sobre__informacoes grid">
      <div className="sobre__box">
        <i class='bx bxs-graduation sobre__icon'></i>
        <h3 className="sobre__title">IFSP</h3>
        <span className="sobre__subtitle" style={{ whiteSpace: 'pre-wrap', hyphens: 'auto', lineHeight: '1.2'  }}>
          Análise e Dev de Sistemas
        </span>
      </div> 
      
      <div className="sobre__box">
        <i class='bx bx-map sobre__icon'></i>
        <h3 className="sobre__title">Localização</h3>
        <span className="sobre__subtitle">São Paulo/SP</span>
      </div>
  
      <div className="sobre__box">
        <span className="sobre__roman-number">I</span>
        <h3 className="sobre__title">Soft kills</h3>
        <h3 className="sobre__title"></h3>
        <span className="sobre__subtitle">Aprendizagem</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number" >II</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">Desenvolvimento</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number">III</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">Atitude</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number">IIII</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">Princípios e Valores</span>
      </div>
    </div>
  )
}

export default Informacoes;