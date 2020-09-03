import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { connect } from 'react-redux'
import { selectCartItemsCount, toggleCartHidden } from 'redux/cart';
import { createStructuredSelector } from "reselect";

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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
