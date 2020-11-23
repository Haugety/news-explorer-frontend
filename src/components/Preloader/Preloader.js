import './Preloader.css';
import React from 'react';

function Preloader() {
  return (
    <section className="preloader">
      <i className="preloader__circle"></i>
      <span className="preloader__text">Идет поиск новостей...</span>
    </section>
  );
}

export default Preloader;
