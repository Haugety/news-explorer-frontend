import './Register.css';
import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({
  isOpen,
  onClose,
  onLogin,
}) {
  function clickOnLogin() {
    onClose();
    onLogin();
  }

  return (
    <PopupWithForm
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <span className="popup__input-title">Email</span>
          <input type="email" placeholder="Введите почту" autoComplete="on" className="popup__input" required />
          <span className="popup__error popup__error_input"></span>
        </label>
        <label className="popup__field">
          <span className="popup__input-title">Пароль</span>
          <input type="password" placeholder="Введите пароль" autoComplete="off" className="popup__input" minLength="6" required />
          <span className="popup__error popup__error_input"></span>
        </label>
        <label className="popup__field">
          <span className="popup__input-title">Имя</span>
          <input type="text" placeholder="Введите пароль" autoComplete="on" className="popup__input" minLength="2" maxLength="30" required />
          <span className="popup__error popup__error_input"></span>
        </label>
        <span className="popup__error popup__error_button"></span>
        <button type="submit" className="popup__submit">Зарегистрироваться</button>
        <p className="popup__link">
          или&nbsp;
          <span className="popup__link popup__link_anchor" onClick={clickOnLogin}>Войти</span>
        </p>
      </fieldset>
    </PopupWithForm>
  );
}

Register.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
};

export default Register;
