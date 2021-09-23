import React from 'react';

import './Article.styles.scss';

function Article({ price, imageUrl, name }) {
  return (
    <div className="article">
      <img src={imageUrl} className="article-img" alt="Article" />
      <div className="article-description">
        <div className="article-info">
          <h3 className="article-name">{name}</h3>
          <p>{price}$</p>
        </div>
        <button className="cta-button">Buy</button>
      </div>
    </div>
  );
}

export default Article;
