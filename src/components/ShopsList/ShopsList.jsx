import React from 'react';
import { Link } from 'react-router-dom';

import Article from '../Article';
import ArticleList from '../ArticleList';
import './ShopsList.styles.scss';

function ShopsList({ title, routeName, items }) {
  return (
    <div className="shop-list">
      <Link className="category" to={`shop/${routeName}`}>
        {title}
      </Link>
      <ArticleList>
        {items.map(({ id, ...data }) => (
          <Article key={id} {...data} />
        ))}
      </ArticleList>
    </div>
  );
}

export default ShopsList;
