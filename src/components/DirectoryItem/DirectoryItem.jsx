import React from 'react';

import './DirectoryItem.styles.scss';

const DirectoryItem = ({ title, imageUrl, size = '' }) => {
  return (
    <div
      // If the size is not undefined, it sets with of item to 50%
      className={`menu-item ${size}`}
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

export default DirectoryItem;
