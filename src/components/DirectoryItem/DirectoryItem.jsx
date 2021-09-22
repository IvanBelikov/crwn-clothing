import React from 'react';
import { withRouter } from 'react-router';

import './DirectoryItem.styles.scss';

const DirectoryItem = ({
  title,
  imageUrl,
  linkUrl,
  history,
  match,
  size = '',
}) => {
  return (
    <div
      // If the size is not undefined, it sets width of item to 50%
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="image-section">
        <span className="cover"></span>
        <img className="image" src={imageUrl} alt="Directory" />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="subtitle">Shop now</p>
      </div>
    </div>
  );
};

export default withRouter(DirectoryItem);
