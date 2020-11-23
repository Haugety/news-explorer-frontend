import './NewsCard.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

function NewsCard() {
  return (
    <li className="card">
      <div className="card__content">
        <div className="card__button-container">
          <Switch>

            <Route path="/saved-news">
              <button type="button" className="card__button">
                <svg className="card__button-icon trash-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="trash-icon__path" fillRule="evenodd" clipRule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" fill="#B6BCBF" />
                </svg>
              </button>
              <div className="card__warning">
                <p className="card__warning-text card__warning-text_saved-news">Убрать из сохраненных</p>
              </div>
              <div className="card__tag">
                <p className="card__tag-text">Природа</p>
              </div>
            </Route>

            <Route exact path="/">
              <button type="button" className="card__button">
                <svg className="card__button-icon save-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="save-icon__path" d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z" stroke="#B6BCBF" strokeWidth="2" />
                </svg>
              </button>
              <div className="card__warning">
                <p className="card__warning-text card__warning-text_main">Войдите, чтобы сохранять статьи</p>
              </div>
            </Route>

          </Switch>

        </div>
        <img className="card__image" src="https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg" alt="Wolf" />
        <div className="card__text-container">
          <p className="card__date">2 августа, 2019</p>
          <h3 className="card__title">Национальное достояние – парки</h3>
          <p className="card__description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className="card__source">ЛЕНТА.РУ</p>
        </div>
      </div>
      <div className="card__shadow"></div>
    </li>
  );
}

export default NewsCard;
