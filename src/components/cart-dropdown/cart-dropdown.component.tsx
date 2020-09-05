import React from "react";
import CustomButton from "components/custom-button/custom-button.component";
import { connect } from "react-redux";
import './cart-dropdown.styles.scss';
import CartItem from "components/cart-item/cart-item.component";
import { CartItem as CartItemType } from 'interfaces';
import { selectCartItems, toggleCartHidden } from "redux/cart";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

class CartDropdown extends React.Component<any, any> {
  render() {
    return <div className={'cart-dropdown'}>
      <div className={'cart-items'}>
        {
          this.props.cartItems.length ?
            this.props.cartItems.map((cartitem: CartItemType) => {
              return <CartItem key={cartitem.id} {...cartitem}/>
            })
            :
            <span className={'empty-message'}>Your Cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        this.props.history.push('/checkout');
        this.props.dispatch(toggleCartHidden());
      }}>Go To Checkout</CustomButton>
    </div>;
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
