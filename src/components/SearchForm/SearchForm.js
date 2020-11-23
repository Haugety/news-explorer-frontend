import './SearchForm.css';
import React from 'react';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__background">
        <div className="search__content">
          <h1 className="search__title">Что творится в мире?</h1>
          <p className="search__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <form className="search-form" name="searchForm">
            <input className="search-form__input" type="text" placeholder="Введите тему новости" autoComplete="on" required />
            <button type="submit" className="search-form__submit">Искать</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
