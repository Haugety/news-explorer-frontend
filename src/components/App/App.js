import './App.css';
import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Footer from '../Footer/Footer';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [news, setNews] = React.useState(JSON.parse(localStorage.getItem('news')) || []);
  const [currentNews, setCurrentNews] = React.useState(3);
  const [searchError, setSearchError] = React.useState({
    bool: false,
    type: '',
  });
  const [authError, setAuthError] = React.useState({
    register: '',
    login: '',
  });
  const [loggedIn, setLoggedIn] = React.useState(localStorage.isLoggedIn === 'true');
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedNews, setSavedNews] = React.useState([]);
  const [isPopupLoading, setIsPopupLoading] = React.useState(false);
  const history = useHistory();

  function handleLoginClick() {
    setIsLoginOpen(true);
  }

  const tockenCheck = React.useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUser(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            localStorage.setItem('isLoggedIn', true);
            setCurrentUser({
              id: res._id,
              email: res.email,
              name: res.name,
            });
          }
        })
        .catch(() => {
          localStorage.removeItem('jwt');
          handleLoginClick();
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    tockenCheck();
  }, [tockenCheck]);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUser(), mainApi.getContent()])
        .then((data) => {
          setCurrentUser({
            id: data[0]._id,
            email: data[0].email,
            name: data[0].name,
          });
          setSavedNews(data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news));
  }, [news]);

  function handleRegisterClick() {
    setIsRegisterOpen(true);
  }

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsInfoTooltipOpen(false);
    setIsBurgerOpen(false);
    setIsPopupLoading(false);
    setAuthError({
      register: '',
      login: '',
    });
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

  function handleSearch(keyword) {
    setIsLoading(true);
    setSearchError({
      bool: false,
      type: '',
    });
    setNews([]);
    setCurrentNews(3);
    newsApi.getNews(keyword)
      .then((res) => {
        if (res.totalResults !== 0) {
          const articlesWithKeyword = res.articles.map((el) => ({
            ...el,
            key: keyword,
            id: `${keyword}${el.publishedAt}`,
          }));
          setNews(articlesWithKeyword);
        } else {
          setSearchError({
            bool: true,
            type: 'notFound',
          });
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setSearchError({
          bool: true,
          type: 'serverError',
        });
      });
  }

  function handleShowMore() {
    setCurrentNews(currentNews + 3);
  }

  function handleRegister(data) {
    setIsPopupLoading(true);
    setAuthError({
      register: '',
      login: '',
    });
    mainApi.register(data)
      .then(() => {
        closeAllPopups();
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setIsPopupLoading(false);
        setAuthError({
          ...authError, register: err.message,
        });
      });
  }

  function handleAuth(data) {
    setIsPopupLoading(true);
    setAuthError({
      register: '',
      login: '',
    });
    mainApi.authorize(data)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', res.token);
        closeAllPopups();
        history.push('/');
      })
      .catch((err) => {
        setIsPopupLoading(false);
        setAuthError({
          ...authError, login: err.message,
        });
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    setSavedNews([]);
  }

  function handleSave(data) {
    const newArticles = savedNews;
    mainApi.createArticle(data)
      .then((res) => {
        newArticles.push(res);
        setSavedNews(newArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete(id) {
    mainApi.removeArticle(id)
      .then((res) => {
        const newArticles = savedNews.filter((el) => el._id !== res._id);
        setSavedNews(newArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header
          onLogin={handleLoginClick}
          onBurger={handleBurgerClick}
          isBurgerOpen={isBurgerOpen}
          onClose={closeAllPopups}
          loggedIn={loggedIn}
          handleSignOut={handleSignOut}
        />

        <Switch>

          <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            loggedIn={loggedIn}
            openLoginPopup={handleLoginClick}
            news={news}
            savedNews={savedNews}
            handleDelete={handleDelete}
          />

          <Route exact path="/">
            <Main
              handleSearch={handleSearch}
              isLoading={isLoading}
              news={news}
              savedNews={savedNews}
              error={searchError}
              currentNews={currentNews}
              handleShowMore={handleShowMore}
              loggedIn={loggedIn}
              handleSave={handleSave}
              handleDelete={handleDelete}
              openLoginPopup={handleLoginClick}
            />
          </Route>

        </Switch>

        <Login
          isOpen={isLoginOpen}
          onClose={closeAllPopups}
          onLogin={handleLoginClick}
          onRegister={handleRegisterClick}
          handleLogin={handleAuth}
          error={authError}
          isLoading={isPopupLoading}
        />
        <Register
          isOpen={isRegisterOpen}
          onClose={closeAllPopups}
          onLogin={handleLoginClick}
          handleRegister={handleRegister}
          error={authError}
          isLoading={isPopupLoading}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          onLogin={handleLoginClick}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
