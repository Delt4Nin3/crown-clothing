import React from "react";
import { connect } from 'react-redux';
import { clearItem } from 'redux/cart';
import { Item } from "interfaces";
import './checkout-item.styles.scss';

import {addItem, removeItem} from "redux/cart";

class CheckoutItem extends React.Component<any, any> {

  render() {
    console.log(this.props)
    return <div className={'checkout-item'}>
      <div className={'image-container'}>
        <img className={''} alt={'item'} src={this.props.cartItem.imageUrl}/>
      </div>
      <span className={'name'}>{this.props.cartItem.name}</span>
      <span className={'quantity'}>
        <div className={'arrow'} onClick={() => this.props.removeItem(this.props.cartItem)}>&#10094;</div>
        <span className={'value'}>{this.props.cartItem.quantity}</span>
        <div className={'arrow'} onClick={() => this.props.addItem(this.props.cartItem)}>&#10095;</div>
      </span>
      <span className={'price'}>{this.props.cartItem.price}</span>
      <div className={'remove-button'} onClick={ () => this.props.clearItem(this.props.cartItem) }>&#10005;</div>
    </div>;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: Item) => dispatch(clearItem(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
