import React from "react";
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Informacoes = () => {
  // Importar o i18n para traduzir o texto
  const {t} = useTranslation();
  return (
    <div className="sobre__informacoes grid">
      <div className="sobre__box">
        <i class='bx bxs-graduation sobre__icon'></i>
        <h3 className="sobre__title">{t('informacoes.titleIFSP')}</h3>
        <span className="sobre__subtitle" style={{ whiteSpace: 'pre-wrap', hyphens: 'auto', lineHeight: '1.2'  }}>
          {t('informacoes.subtitleIFSP')}
        </span>
      </div> 
      
      <div className="sobre__box">
        <i class='bx bx-map sobre__icon'></i>
        <h3 className="sobre__title">{t('informacoes.titleLocalizacao')}</h3>
        <span className="sobre__subtitle">{t('informacoes.subtitleSP')}</span>
      </div>
  
      <div className="sobre__box">
        <span className="sobre__roman-number">I</span>
        <h3 className="sobre__title">Soft kills</h3>
        <h3 className="sobre__title"></h3>
        <span className="sobre__subtitle">{t('informacoes.subtitleAprendizagem')}</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number" >II</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">{t('informacoes.subtitleDesenvolvimento')}</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number">III</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">{t('informacoes.subtitleAtitude')}</span>
      </div>

      <div className="sobre__box">
        <span className="sobre__roman-number">IIII</span>
        <h3 className="sobre__title">Soft kills</h3>
        <span className="sobre__subtitle">{t('informacoes.subtitlePrieValores')}</span>
      </div>
    </div>
  )
}

export default Informacoes;