import './SearchForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import Validation from '../Validation/Validation';

function SearchForm({
  onSubmit,
}) {
  const { values, handleChange } = Validation();
  const [showError, setShowError] = React.useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.searchInput) {
      setShowError(true);
    } else {
      onSubmit(values.searchInput);
    }
  }

  function handleFocus() {
    setShowError(false);
  }

  return (
    <section className="search">
      <div className="search__background">
        <div className="search__content">
          <h1 className="search__title">Что творится в мире?</h1>
          <p className="search__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
          <form className="search-form" name="searchForm" onSubmit={handleSubmit} noValidate>
            <input
              className={`search-form__input ${showError ? 'search-form__input_error' : ''}`}
              name="searchInput"
              onChange={handleChange}
              onFocus={handleFocus}
              type="text"
              placeholder={showError ? 'Нужно ввести ключевое слово' : 'Введите тему новости'}
              autoComplete="on"
              required
            />
            <button type="submit" className="search-form__submit">Искать</button>
          </form>
        </div>
      </div>
    </section>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
