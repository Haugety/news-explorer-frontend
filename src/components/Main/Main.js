import './Main.css';
import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Error from '../Error/Error';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main({
  handleSearch,
  isLoading,
  news,
  savedNews,
  error,
  currentNews,
  handleShowMore,
  loggedIn,
  handleSave,
  handleDelete,
  openLoginPopup,
}) {
  return (
    <main className="main">

      <SearchForm
        onSubmit={handleSearch}
      />
      {isLoading && <Preloader />}
      {error.bool && <Error error={error.type} />}
      {news.length !== 0 && <NewsCardList
       news={news}
       savedNews={savedNews}
       currentNews={currentNews}
       handleShowMore={handleShowMore}
       loggedIn={loggedIn}
       handleSave={handleSave}
       handleDelete={handleDelete}
       openLoginPopup={openLoginPopup}
      />}
      <About />

    </main>
  );
}

Main.propTypes = {
  handleSearch: PropTypes.func,
  isLoading: PropTypes.bool,
  news: PropTypes.array,
  savedNews: PropTypes.array,
  error: PropTypes.object,
  currentNews: PropTypes.number,
  handleShowMore: PropTypes.func,
  keyword: PropTypes.string,
  loggedIn: PropTypes.bool,
  handleSave: PropTypes.func,
  handleDelete: PropTypes.func,
  openLoginPopup: PropTypes.func,
};

export default Main;
