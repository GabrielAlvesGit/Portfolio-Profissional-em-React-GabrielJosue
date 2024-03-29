import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contato.css';
// Importar o i18n para traduzir o texto
import { useTranslation } from "react-i18next";

const Contato = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState(false);
   // Importar o i18n para traduzir o texto
  const {t} = useTranslation();

  const validateEmail = (email) => {
    const pattern = /[a-z0-9._%+-]+@(hotmail|gmail|yahoo)\.[a-z]{2,}$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const isValid = validateEmail(email);

    setEmailError(!isValid);
  };

  const handleBlur = () => {
    // Remove a borda vermelha quando o usuário clica fora do campo
    setEmailError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateEmail(form.current.email.value)) {
      emailjs.sendForm(
        'service_pcs0eze',
        'template_6aho4hs',
        form.current,
        'wexBC1aiR90puUR8E'
      );
      e.target.reset();
    } else {
      setEmailError(true);
    }
  };
  return (
    <section className="contato section" id="contato">
      <h2 className="section__title" >{t('contato.title')}</h2>
      <span className="section__subtitle">{t('contato.subtitle')}</span>

      <div className="contato__container container grid">
        <div className="contato__content">
          <h3 className="contato__title">
            {t('contato.titleFaleComigo')}
          </h3>

          <div className="contato__info">
            <div className="contato__card">
              <i className="bx bx-mail-send contato__card-icon"></i>

              <h3 className="contato__card-title">
                {t('contato.card-titleEmail')}
              </h3>
              <span className="contato__card-data">
                {t('contato.card-dataEmail')}
              </span>
              
              <a href="mailto:gabrielalves.-100@gmail.com" className="contato__button">
                {t('contato.card-titleEnvieEmail')} {" "}
                <i className="bx bx-right-arrow-alt contato__button-icon"></i></a>
            </div>

            <div className="contato__card">
              <i className="bx bxl-whatsapp contato__card-icon"></i>
              
              <h3 className="contato__card-title">
                {t('contato.titleWhatsapp')}
              </h3>
              <span className="contato__card-data">
                {t('contato.card-dataNum')}
              </span>

              <a href="https://wa.me/5511978064552" className="contato__button">
                {t('contato.card-titleEnvieWhatsapp')}
              {" "}<i className="bx bx-right-arrow-alt contato__button-icon"></i></a>
            </div>

            <div className="contato__card">
              <i className="bx bxl-instagram contato__card-icon"></i>
              
              <h3 className="contato__card-title">
                {t('contato.titleInstagram')}
              </h3>
              <span className="contato__card-data">
                {t('contato.card-dataIns')}
              </span>

              <a href="https://www.instagram.com/gabrielalves.s" className="contato__button">
                {t('contato.card-titleEnvieInst')} 
                {" "}<i className="bx bx-right-arrow-alt contato__button-icon"></i></a>
            </div>

          </div>
        </div>

        <div className="contato__content">
          <h3 className="contato__title">
            {t('contato.titleContatoViaEmail')}
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contato__form">
            <div className="contato__form-div">
              <label className="contato__form-tag">
                {t('contato.labelForm-tagNome')}
              </label>
              <input 
                type="text" 
                name="name" 
                className="contato__form-input" 
                placeholder={t('contato.placeholderNome')}/>
            </div>

            <div className={`contato__form-div ${emailError ? 'error-input' : ''}`}>
              <label className="contato__form-tag">
                {t('contato.labelForm-tagEmail')}
              </label>
              <input
                type="email"
                name="email"
                className="contato__form-input"
                placeholder={t('contato.placeholderEmail')}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                style={{
                  border: emailError ? '2px solid #FF9999' : '2px solid rgba(0, 0, 0, 0.3)',
                }}
                required
              />
            </div>

            <div className="contato__form-div contato__form-area">
              <label className="contato__form-tag">
                {t('contato.labelForm-tagAssunto')}
              </label>
              <textarea name="message" cols="30" rows="10" className="contato__form-input" 
              placeholder={t('contato.placeholderAssunto')}></textarea>
            </div>

            <button className="button button--flex">
              {t('contato.buttonEnviarMensagem')}
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contato;