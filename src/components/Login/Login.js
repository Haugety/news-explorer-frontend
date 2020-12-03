import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Validation from '../Validation/Validation';

function Login({
  isOpen,
  onClose,
  onRegister,
  handleLogin,
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

  function clickOnRegister() {
    onClose();
    onRegister();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin({
      email: values.emailInput,
      password: values.passwordInput,
      name: values.nameInput,
    });
  }

  return (
    <PopupWithForm
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <span className="popup__input-title">Email</span>
          <input type="email" placeholder="Введите почту" name="emailInput" onChange={handleChange} value={values.emailInput || ''} autoComplete="on" className="popup__input" required />
          <span className="popup__error popup__error_input">{errors.emailInput}</span>
        </label>
        <label className="popup__field">
          <span className="popup__input-title">Пароль</span>
          <input type="password" placeholder="Введите пароль" name="passwordInput" onChange={handleChange} value={values.passwordInput || ''} autoComplete="off" className="popup__input" minLength="6" required />
          <span className="popup__error popup__error_input">{errors.passwordInput}</span>
        </label>
        <span className="popup__error popup__error_button">{error.login}</span>
        <button type="submit"
          className={`popup__submit ${!isValid || isLoading ? 'popup__submit_inactive' : ''}`}
          disabled={!isValid || isLoading}
        >{isLoading ? 'Авторизация...' : 'Войти'}</button>
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
  handleLogin: PropTypes.func,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Login;
