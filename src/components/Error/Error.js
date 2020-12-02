import './Error.css';
import React from 'react';
import PropTypes from 'prop-types';

function Error({ error }) {
  return (
    <section className="error">
      <svg className="error__icon" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="43" cy="43" r="36.5" stroke="#D1D2D6" />
        <path d="M69 69L88.5 88.5" stroke="#D1D2D6" />
        <path d="M58.3283 55.959C54.6606 51.6979 49.2275 48.9998 43.1642 48.9998C37.1009 48.9998 31.6678 51.6979 28 55.959" stroke="#D1D2D6" />
        <circle cx="55.5" cy="33.5" r="1.5" fill="#D1D2D6" />
        <circle cx="30.5" cy="33.5" r="1.5" fill="#D1D2D6" />
      </svg>
      <h3 className="error__title">{ error === 'serverError' ? 'Произошла ошибка' : 'Ничего не найдено'}</h3>
      <p className="error__description">{ error === 'serverError' ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.' : 'К сожалению по вашему запросу ничего не найдено.'}</p>
    </section>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
