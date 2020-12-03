import './Register.css';
import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Validation from '../Validation/Validation';

function Register({
  isOpen,
  onClose,
  onLogin,
  handleRegister,
  error,
  isLoading,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = Validation();

  React.useEffect(() => {
    resetForm();
  }, [isOpen]);

  function clickOnLogin() {
    onClose();
    onLogin();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister({
      email: values.emailInput,
      password: values.passwordInput,
      name: values.nameInput,
    });
  }

  return (
    <PopupWithForm
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <span className="popup__input-title">Email</span>
          <input type="email" placeholder="Введите почту" autoComplete="on" name="emailInput" onChange={handleChange} value={values.emailInput || ''} className="popup__input" required />
          <span className="popup__error popup__error_input">{errors.emailInput}</span>
        </label>
        <label className="popup__field">
          <span className="popup__input-title">Пароль</span>
          <input type="password" placeholder="Введите пароль" autoComplete="off" name="passwordInput" onChange={handleChange} value={values.passwordInput || ''} className="popup__input" minLength="6" required />
          <span className="popup__error popup__error_input">{errors.passwordInput}</span>
        </label>
        <label className="popup__field">
          <span className="popup__input-title">Имя</span>
          <input type="text" placeholder="Введите имя" autoComplete="on" name="nameInput" onChange={handleChange} value={values.nameInput || ''} className="popup__input" minLength="2" maxLength="30" required />
          <span className="popup__error popup__error_input">{errors.nameInput}</span>
        </label>
        <span className="popup__error popup__error_button">{error.register}</span>
        <button
          type="submit"
          className={`popup__submit ${!isValid || isLoading ? 'popup__submit_inactive' : ''}`}
          disabled={!isValid || isLoading}
        >{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}</button>
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
  handleRegister: PropTypes.func,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Register;
