import './SavedNewsHeader.css';
import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ savedNews }) {
  const userData = React.useContext(CurrentUserContext);
  const tags = savedNews.map((element) => element.keyword) || [];
  const tagsObj = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const tagsSorted = Object.keys(tagsObj).sort((a, b) => tagsObj[b] - tagsObj[a]);

  function getKeywords() {
    if (tagsSorted.length <= 3) {
      return tagsSorted.join(', ');
    }

    return tagsSorted.filter((element, i) => i < 2).join(', ');
  }

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Сохраненные статьи</h2>
      {userData.name && <h3 className="saved-news-header__subtitle">{`${userData.name}, у вас ${savedNews.length || 0} сохранённых статей`}</h3>}
      {savedNews.length
        ? <p className="saved-news-header__keywords">
          По ключевым словам:&nbsp;
          <span className="saved-news-header__keyword">{getKeywords()}</span>
          {tagsSorted.length > 3
            ? <>&nbsp;и&nbsp;<span className="saved-news-header__keyword">{tagsSorted.length - 2} другим</span></>
            : null}
        </p>
        : null
      }
    </section >
  );
}

SavedNewsHeader.propTypes = {
  savedNews: PropTypes.array,
};

export default SavedNewsHeader;
