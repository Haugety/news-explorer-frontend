import './InfoTooltip.css';
import React from 'react';
import PropTypes from 'prop-types';

function InfoTooltip({
  isOpen,
  onClose,
  onLogin,
}) {
  function clickOnLogin() {
    onClose();
    onLogin();
  }

  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_infotooltip">
        <button type="button" className="popup__close-button" onClick={onClose}>
          <svg className="popup__close-button-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3566 20L29.9996 27.643C30.6505 28.2938 30.6505 29.3491 29.9996 30C29.3487 30.6509 28.2935 30.6509 27.6426 30L18.3497 20.7071C17.9592 20.3166 17.9592 19.6834 18.3497 19.2929L27.6426 10C28.2935 9.34912 29.3487 9.34912 29.9996 10C30.6505 10.6509 30.6505 11.7061 29.9996 12.357L22.3566 20Z" fill="white" />
            <path d="M18.1307 20L10.4877 27.643C9.83683 28.2938 9.83683 29.3491 10.4877 30C11.1386 30.6509 12.1939 30.6509 12.8447 30L22.1376 20.7071C22.5281 20.3166 22.5281 19.6834 22.1376 19.2929L12.8447 10C12.1939 9.34912 11.1386 9.34913 10.4877 10C9.83683 10.6509 9.83683 11.7061 10.4877 12.357L18.1307 20Z" fill="white" />
          </svg>
        </button>
        <h3 className="popup__title popup__title_infotooltip">Пользователь успешно зарегистрирован!</h3>
        <span className="popup__link popup__link_anchor popup__link_infotooltip" onClick={clickOnLogin}>Войти</span>
      </div>
    </section>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
};

export default InfoTooltip;
