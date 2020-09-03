import React from "react";
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "redux/cart";
import { CartItem } from "../../interfaces";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

class CheckoutPage extends React.Component<any, any> {
  render() {
    return (
      <div className={'checkout-page'}>
        <div className={'checkout-header'}>
          <div className={'header-blocks'}>
            <span>Product</span>
          </div>
          <div className={'header-blocks'}>
            <span>Description</span>
          </div>
          <div className={'header-blocks'}>
            <span>Quantity</span>
          </div>
          <div className={'header-blocks'}>
            <span>Price</span>
          </div>
          <div className={'header-blocks'}>
            <span>Remove</span>
          </div>
        </div>
        {
          this.props.cartItems.map((cartItem: CartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          })
        }
        <span className={'total'}>Total: $ {this.props.cartTotal}</span>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})


export default connect(mapStateToProps)(CheckoutPage);
