import './NewsCardList.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  news,
  currentNews,
  handleShowMore,
  loggedIn,
  handleSave,
  savedNews,
  handleDelete,
  openLoginPopup,
}) {
  const location = useLocation();
  function onShowMore() {
    handleShowMore();
  }

  function checkIsSaved(newsItem) {
    return savedNews.some((el) => el.id === newsItem.id);
  }

  return (
    <section className={`news-cards ${location.pathname === '/' ? 'news-cards_main' : 'news-cards_saved-news'}`}>

      <Switch>

        {savedNews && <Route path="/saved-news">
          <ul className="news-cards__list list">
          {savedNews.map((item) => <NewsCard
              key={item.link}
              newsItem={item}
              handleDelete={handleDelete}
            />)}
          </ul>
        </Route>}

        {news && <Route exact path="/">
          <h2 className="news-cards__title">Результаты поиска</h2>
          <ul className="news-cards__list list">
            {news.slice(0, currentNews).map((item) => <NewsCard
              key={item.url}
              newsItem={item}
              loggedIn={loggedIn}
              handleSave={handleSave}
              handleDelete={handleDelete}
              isCardSaved={checkIsSaved(item)}
              savedNews = {savedNews}
              openLoginPopup={openLoginPopup}
            />)}
          </ul>
          {currentNews < news.length && <button type="button" className="news-cards__button" onClick={onShowMore}>Показать еще</button>}
        </Route>}

      </Switch>

    </section>
  );
}

NewsCardList.propTypes = {
  news: PropTypes.array,
  currentNews: PropTypes.number,
  handleShowMore: PropTypes.func,
  loggedIn: PropTypes.bool,
  handleSave: PropTypes.func,
  savedNews: PropTypes.array,
  handleDelete: PropTypes.func,
  openLoginPopup: PropTypes.func,
};

export default NewsCardList;
