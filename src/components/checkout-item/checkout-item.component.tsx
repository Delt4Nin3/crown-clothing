import React from "react";
import './checkout-item.styles.scss';

class CheckoutItem extends React.Component<any, any> {
  render() {
    return <div className={'checkout-item'}>
      <div className={'image-container'}>
        <img className={''} alt={'item'} src={this.props.cartItem.imageUrl}/>
      </div>
      <span className={'name'}>{this.props.cartItem.name}</span>
      <span className={'quantity'}>{this.props.cartItem.quantity}</span>
      <span className={'price'}>{this.props.cartItem.price}</span>
      <div className={'remove-button'}>&#1005;</div>

    </div>;
  }
}

export default CheckoutItem;
