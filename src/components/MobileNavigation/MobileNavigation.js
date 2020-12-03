import './MobileNavigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MobileNavigation({
  isOpen,
  onClose,
  onLogin,
  loggedIn,
  onSignOut,
}) {
  const userData = React.useContext(CurrentUserContext);
  function clickOnLogin() {
    onClose();
    onLogin();
  }

  function clickOnLink() {
    onClose();
  }

  return (
    <div className={`mobile-nav ${isOpen ? 'mobile-nav_opened' : ''}`}>
      <nav className="mobile-nav__container">
        <Link to="/" className="navigation__link mobile-nav__link" onClick={clickOnLink}>Главная</Link>
        {loggedIn && <Link to="/saved-news" className="navigation__link mobile-nav__link" onClick={clickOnLink}>Сохраненные статьи</Link>}
        {loggedIn
          ? <button type="button" className="button navigation__button navigation__button_logout mobile-nav__button" onClick={onSignOut}>
            {userData.name}
            <svg className="button__icon mobile-nav__button-icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z" />
            </svg>
          </button>
          : <button className="button navigation__button navigation__button_login mobile-nav__button" onClick={clickOnLogin}>Авторизоваться</button>}
      </nav>
    </div>
  );
}

MobileNavigation.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
  loggedIn: PropTypes.bool,
  onSignOut: PropTypes.func,
};

export default MobileNavigation;
