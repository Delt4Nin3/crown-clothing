import React from "react";
import CustomButton from "components/custom-button/custom-button.component";
import { connect } from "react-redux";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";
import { CartItem as CartItemType } from 'interfaces';

class CartDropdown extends React.Component<any, any> {
  render() {
    return <div className={'cart-dropdown'}>
      <div className={'cart-items'}>
        {
          this.props.cartItems.map((cartitem: CartItemType) => {
            return <CartItem key={cartitem.id} {...cartitem}/>
          })
        }
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>;
  }
}

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
