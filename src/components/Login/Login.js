import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({
  isOpen,
  onClose,
  onRegister,
}) {
  function clickOnRegister() {
    onClose();
    onRegister();
  }

  return (
    <PopupWithForm
      title="Вход"
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
          <input type="password" placeholder="Введите пароль" autoComplete="off" className="popup__input" required />
          <span className="popup__error popup__error_input"></span>
        </label>
        <span className="popup__error popup__error_button"></span>
        <button type="submit" className="popup__submit">Войти</button>
        <p className="popup__link">
          или&nbsp;
          <span className="popup__link popup__link_anchor" onClick={clickOnRegister}>Зарегистрироваться</span>
        </p>
      </fieldset>
    </PopupWithForm>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onRegister: PropTypes.func,
};

export default Login;
