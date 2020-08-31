import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';

class CartDropdown extends React.Component<any, any> {
  render() {
    return <div className={'cart-dropdown'}>
      <div className={'cart-items'}>
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>;
  }
}

export default CartDropdown;