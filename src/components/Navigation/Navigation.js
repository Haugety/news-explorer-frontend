import './Navigation.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Navigation({
  path,
  onLogin,
  loggedIn,
  onSignOut,
}) {
  const location = useLocation();
  const userData = React.useContext(CurrentUserContext);

  return (
    <nav className="navigation">
      <Link to="/" className={`navigation__link navigation__link_${path} ${location.pathname === '/' ? 'navigation__link_active_main' : ''}`}>Главная</Link>
      {loggedIn && <Link to="/saved-news" className={`navigation__link navigation__link_${path} ${location.pathname === '/saved-news' ? 'navigation__link_active_saved-news' : ''}`}>Сохраненные статьи</Link>}
      {loggedIn
        ? <button type="button" className={`button navigation__button navigation__button_logout navigation__button_${path}`} onClick={onSignOut}>
          <span className="button__text">{userData.name}</span>
          <svg className={`button__icon button__icon_${path}`} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z" />
          </svg>
        </button>
        : <button className={`button navigation__button navigation__button_login navigation__button_${path}`} onClick={onLogin}>Авторизоваться</button>}
    </nav>
  );
}

Navigation.propTypes = {
  path: PropTypes.string,
  onLogin: PropTypes.func,
  loggedIn: PropTypes.bool,
  onSignOut: PropTypes.func,
};

export default Navigation;
