import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Directory from '../../components/Directory';
import DirectoryItem from '../../components/DirectoryItem';
import './homepage.styles.scss';
import data from '../../directory.data';

const Home = () => {
  return (
    <Directory>
      {data.map(({ title, imageUrl, size }) => {
        return (
          <DirectoryItem
            key={uuidv4()}
            title={title}
            imageUrl={imageUrl}
            size={size}
          />
        );
      })}
    </Directory>
  );
};

export default Home;
