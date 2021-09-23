import React from 'react';

import ShopsList from '../../components/ShopsList';
import shopData from '../../shop.data';
import './Shop.styles.scss';

export default class Shop extends React.Component {
  sortShops = (shopType) => {
    return shopData.filter((shop) => shop.routeName === shopType)[0];
  };

  render() {
    // const { match } = this.props;
    // let currentShop;
    // if (match.params !== 0) {
    //   currentShop = this.sortShops(match.params.shop);
    // }

    return (
      <div className="shop-page">
        {shopData.map(({ id, ...shop }) => (
          <ShopsList key={id} {...shop} />
        ))}
      </div>
    );
  }
}
