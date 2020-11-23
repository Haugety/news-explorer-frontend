import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main() {
  return (
    <div className="main">

      <SearchForm />
      <NewsCardList />
      <About />

    </div>
  );
}

export default Main;
