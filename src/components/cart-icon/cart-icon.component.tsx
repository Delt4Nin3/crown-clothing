import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { connect } from 'react-redux'
import { toggleCartHidden } from 'redux/cart';
import { CartItem } from "../../interfaces";

class CartIcon extends React.Component<any, any> {
  render() {
    return <div className={'cart-icon'} onClick={this.props.toggleCartHidden}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>{this.props.itemCount}</span>
    </div>;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state: any) => ({
  itemCount: state.cart.cartItems.reduce((accumulatedQuantity: number, cartItem: CartItem) => {
    return accumulatedQuantity + cartItem.quantity
  }, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
