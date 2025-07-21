import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [openModal, setOpenModal] = useState(true);
  const [progress, setProgress] = useState(50); 

  if (!openModal) return null;

  return (
    <div className="progress-modal__container">
      <div className="progress-modal__overlay">
        <div className="progress-modal__content">
          <div className="progress-modal__header">
            <button
              className="progress-modal__close"
              onClick={() => setOpenModal(false)}
              aria-label="Fechar modal"
            >
              ×
            </button>
            <h2 className="progress-modal__title">Atualizações no Portfolio</h2>
            <p className="progress-modal__subtitle">
              Período - 12/07/2025 até 20/07/2025 (Fase 2/3)
            </p>
          </div>
          <div className="progress-modal__body">
           <p className="progress-modal__subtitle">
              Se você é um <strong>Recrutador</strong>, <strong>Gestor</strong> ou parte da <strong>Equipe</strong>, fique à vontade para entrar em contato via WhatsApp: <a href="tel:+5597806-4552" target="_blank" rel="noopener noreferrer">+55 97806-4552</a> ou Email: <a href="mailto:gabrielalves.-100@hotmail.com">gabrielalves.-100@hotmail.com</a>.
              <br /> <br />
              Estou disponível para apresentar as novidades, discutir detalhes e alinhar expectativas.
            </p>
            <br /> <br />

            <div className="modal__img"></div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: progress >= 100 ? '#dcfce7' : '#dbeafe',
                  color: progress >= 100 ? '#166534' : '#1e40af'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: progress >= 100 ? '#16a34a' : '#3b82f6',
                    animation: progress > 0 && progress < 100 ? 'pulse 2s infinite' : 'none'
                  }} />
                  {progress >= 100 ? 'Concluído' : 'Em andamento'}
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;