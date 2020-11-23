import './NewsCardList.css';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  const location = useLocation();

  return (
    <section className={`news-cards ${location.pathname === '/' ? 'news-cards_main' : 'news-cards_saved-news'}`}>

      <Switch>

        <Route path="/saved-news">
          <ul className="news-cards__list list">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </ul>
        </Route>

        <Route exact path="/">
          <h2 className="news-cards__title">Результаты поиска</h2>
          <ul className="news-cards__list list">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </ul>
          <button type="button" className="news-cards__button">Показать еще</button>
        </Route>

      </Switch>

    </section>
  );
}

export default NewsCardList;
