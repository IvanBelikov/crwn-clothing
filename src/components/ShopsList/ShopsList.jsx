import React from 'react';

import Article from '../Article';
import ArticleList from '../ArticleList';
import './ShopsList.styles.scss';

function ShopsList({ title, routeName, items }) {
  return (
    <div className="shop-list">
      <h1 className="category-title">{title}</h1>
      <ArticleList>
        {items.map(({ id, ...data }) => (
          <Article key={id} {...data} />
        ))}
      </ArticleList>
    </div>
  );
}

export default ShopsList;
