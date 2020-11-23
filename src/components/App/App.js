import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Footer from '../Footer/Footer';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
    setIsBurgerOpen(false);
  }

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closeByOverlay(evt) {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('mobile-nav_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', closeByOverlay);
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByOverlay);
    };
  }, []);

  function handleLoginClick() {
    setIsLoginOpen(true);
  }

  function handleRegisterClick() {
    setIsRegisterOpen(true);
  }

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  return (
    <div className="page">

      <Header
        onLogin={handleLoginClick}
        onBurger={handleBurgerClick}
        isBurgerOpen={isBurgerOpen}
        onClose={closeAllPopups}
      />

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/saved-news">
          <SavedNews />
        </Route>

      </Switch>

      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onLogin={handleLoginClick}
        onRegister={handleRegisterClick}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onLogin={handleLoginClick}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onLogin={handleLoginClick}
      />

      <Footer />
    </div>
  );
}

export default App;
