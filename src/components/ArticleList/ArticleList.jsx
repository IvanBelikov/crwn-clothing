import React from 'react';

import './ArticleList.styles.scss';

export default function ArticleList(props) {
  return <div className="article-list">{props.children}</div>;
}
