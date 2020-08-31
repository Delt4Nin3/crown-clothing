import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { connect } from 'react-redux'
import { toggleCartHidden } from 'redux/cart';

class CartIcon extends React.Component<any, any> {

  render() {
    return <div className={'cart-icon'} onClick={this.props.toggleCartHidden}>
      <ShoppingIcon className={'shopping-icon'}/>
      <span className={'item-count'}>0</span>
    </div>;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
