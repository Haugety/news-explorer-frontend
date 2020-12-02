import './SavedNews.css';
import React from 'react';
import PropTypes from 'prop-types';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ news, savedNews, handleDelete }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedNews={savedNews} />
      <NewsCardList savedNews={savedNews} handleDelete={handleDelete} news={news} />
    </main>
  );
}

SavedNews.propTypes = {
  news: PropTypes.array,
  savedNews: PropTypes.array,
  handleDelete: PropTypes.func,
};

export default SavedNews;
