import './Header.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Header({
  onLogin,
  onBurger,
  isBurgerOpen,
  onClose,
}) {
  const location = useLocation();
  const windowWidth = useWindowWidth();

  return (
    <>
      <header className={`header
      ${location.pathname === '/' ? 'header_main' : 'header_saved-news'}
      ${isBurgerOpen ? 'header_mobile' : ''}`}
      >
        <div className={`header__logo
        ${location.pathname === '/' ? 'header__logo_main' : 'header__logo_saved-news'}
        ${isBurgerOpen ? 'header__logo_mobile' : ''}`}
        >NewsExplorer</div>

        {windowWidth <= 578

          ? <button type="button" className={`header__burger ${isBurgerOpen ? 'header__burger_close' : ''}`} onClick={isBurgerOpen ? onClose : onBurger}>
            {isBurgerOpen
              ? <svg className="header__burger-close-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3566 20L29.9996 27.643C30.6505 28.2938 30.6505 29.3491 29.9996 30C29.3487 30.6509 28.2935 30.6509 27.6426 30L18.3497 20.7071C17.9592 20.3166 17.9592 19.6834 18.3497 19.2929L27.6426 10C28.2935 9.34912 29.3487 9.34912 29.9996 10C30.6505 10.6509 30.6505 11.7061 29.9996 12.357L22.3566 20Z" fill="white" />
                <path d="M18.1307 20L10.4877 27.643C9.83683 28.2938 9.83683 29.3491 10.4877 30C11.1386 30.6509 12.1939 30.6509 12.8447 30L22.1376 20.7071C22.5281 20.3166 22.5281 19.6834 22.1376 19.2929L12.8447 10C12.1939 9.34912 11.1386 9.34913 10.4877 10C9.83683 10.6509 9.83683 11.7061 10.4877 12.357L18.1307 20Z" fill="white" />
              </svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={`header__burger-rect ${location.pathname === '/' ? 'header__burger-rect_main' : 'header__burger-rect_saved-news'}`} x="4" y="8" width="16" height="2" fill="white" />
                <rect className={`header__burger-rect ${location.pathname === '/' ? 'header__burger-rect_main' : 'header__burger-rect_saved-news'}`} x="4" y="14" width="16" height="2" fill="white" />
              </svg>
            }
          </button>

          : <Switch>
            <Route exact path="/saved-news">
              <Navigation
                path="saved-news"
                onLogin={onLogin}
              />
            </Route>
            <Route exact path="/">
              <Navigation
                path="main"
                onLogin={onLogin}
              />
            </Route>
          </Switch>

        }

      </header>

      <MobileNavigation
        isOpen={isBurgerOpen}
        onClose={onClose}
        onLogin={onLogin}
      />
    </>
  );
}

Header.propTypes = {
  onLogin: PropTypes.func,
  onBurger: PropTypes.func,
  isBurgerOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Header;
