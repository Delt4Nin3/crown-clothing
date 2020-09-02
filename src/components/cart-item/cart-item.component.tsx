import React from "react";
import './cart-item.styles.scss';
import { CartItem as CartItemProps } from 'interfaces';

class CartItem extends React.Component<any, CartItemProps> {
  render() {
    const {name, price, quantity, imageUrl} = this.props;

    return <div className={'cart-item'}>
      <img src={imageUrl} alt={'item'}/>
      <div className={'item-details'}>
        <span className={'name'}>{name}</span>
        <span className={'price'}>{quantity} x ${price}</span>
      </div>
    </div>;
  }
}

export default CartItem;
