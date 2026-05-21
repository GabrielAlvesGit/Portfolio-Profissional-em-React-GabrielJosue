import React, { useState, useEffect } from 'react';

// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

import './cookieConsent.css';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');

    // Se já foi aceito, não mostra novamente
    if (consent === 'accepted') return;

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      // Só aparece quando o usuário rolar até o final da página
      if (scrolledToBottom) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Verifica logo de início (caso a página já esteja no final ou seja curta)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Não aceitou
    // Aparece novamente na próxima visita
    localStorage.removeItem('cookieConsent');
    setIsVisible(false);
  };

  // Debugging
  // console.log('CookieConsent isVisible:', isVisible);

  if (!isVisible) return null;

  return (
    <div className="cookieConsent">
      <div className="content">
        <h2 className="section__title">{t('cookieConsent.title')}</h2>
        <div class="style__switcher-close" onClick={handleDecline}>×</div>

        <p className="section__subtitle">
           {t('cookieConsent.subtitle').split('\n').map((item, key) => <React.Fragment key={key}>{item}<br/></React.Fragment> )} <a className="cookieConsent__subtitle__sublink" href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">{t('cookieConsent.link')}</a>
        </p>
        <div className="buttons">
          <button className="button button--flex acceptButton" onClick={handleAccept}>
            {t('cookieConsent.btnAccept')}
          </button>
          <button className="button button--flex declineButton" onClick={handleDecline}>
            {t('cookieConsent.btnDecline')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;