import './NewsCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

function NewsCard({
  newsItem,
  handleSave,
  loggedIn,
  handleDelete,
  isCardSaved,
  savedNews,
  openLoginPopup,
}) {
  const [isSaved, setIsSaved] = React.useState(isCardSaved);

  React.useEffect(() => {
    setIsSaved(isCardSaved);
  }, [isCardSaved]);

  function getId() {
    const savedEl = savedNews.find((el) => el.id === newsItem.id);
    if (savedEl) {
      return savedEl._id;
    }
    return null;
  }

  function onSave() {
    handleSave(newsItem);
    setIsSaved(true);
  }
  function onSaveItemDelete() {
    handleDelete(newsItem._id);
    setIsSaved(false);
  }
  function onDelete() {
    const newsId = getId();
    handleDelete(newsId);
    setIsSaved(false);
  }
  function handleClick() {
    if (loggedIn && isSaved) {
      onDelete();
      return;
    }
    if (loggedIn && !isSaved) {
      onSave();
      return;
    }
    openLoginPopup();
  }
  function formatDate(date) {
    const dateString = new Date(date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const dateArr = dateString.split(' ');
    return `${dateArr[0]} ${dateArr[1]}, ${dateArr[2]}`;
  }
  return (
    <li className="card">
      <div className="card__content">
        <a className="card__link" href={newsItem.url || newsItem.link} target="_blank" rel="noreferrer"></a>
        <div className="card__button-container">
          <Switch>

            <Route path="/saved-news">
              <button type="button" className="card__button" onClick={onSaveItemDelete}>
                <svg className="card__button-icon trash-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="trash-icon__path" fillRule="evenodd" clipRule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" fill="#B6BCBF" />
                </svg>
              </button>
              <div className="card__warning">
                <p className="card__warning-text card__warning-text_saved-news">Убрать из сохраненных</p>
              </div>
              <div className="card__tag">
                <p className="card__tag-text">{newsItem.keyword}</p>
              </div>
            </Route>

            <Route exact path="/">
              <button type="button" className={`card__button ${isSaved && 'card__button_marked'}`} onClick={handleClick}>
                <svg className={`card__button-icon save-icon ${isSaved && 'save-icon_marked'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`save-icon__path ${isSaved && 'save-icon__path_marked'}`} d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z" stroke="#B6BCBF" strokeWidth="2" />
                </svg>
              </button>
              <div className={`card__warning ${loggedIn && 'card__warning_none'}`}>
                <p className="card__warning-text card__warning-text_main">Войдите, чтобы сохранять статьи</p>
              </div>
            </Route>

          </Switch>

        </div>
        <img className="card__image" src={newsItem.urlToImage || newsItem.image} alt={newsItem.title} />
        <div className="card__text-container">
          <p className="card__date">{formatDate(newsItem.publishedAt || newsItem.date)}</p>
          <h3 className="card__title">{newsItem.title}</h3>
          <p className="card__description">{newsItem.description || newsItem.text}</p>
          <p className="card__source">{newsItem.source.name || newsItem.source}</p>
        </div>
      </div>
      <div className="card__shadow"></div>
    </li>
  );
}

NewsCard.propTypes = {
  newsItem: PropTypes.object,
  handleSave: PropTypes.func,
  loggedIn: PropTypes.bool,
  handleDelete: PropTypes.func,
  isCardSaved: PropTypes.bool,
  newsId: PropTypes.any,
  savedNews: PropTypes.array,
  openLoginPopup: PropTypes.func,
};

export default NewsCard;
