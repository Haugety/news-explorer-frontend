import './SavedNewsHeader.css';
import React from 'react';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохраненные статьи</h2>
      <h3 className="saved-news-header__subtitle">Грета, у вас 5 сохранённых статей</h3>
      <p className="saved-news-header__keywords">
        По ключевым словам:&nbsp;
        <span className="saved-news-header__keyword">Природа, Тайга</span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__keyword">2-м другим</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
