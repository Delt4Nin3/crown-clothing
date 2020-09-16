import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "assets/crown.svg";
import { auth } from 'firebase/firebase.utils';
import './header.styles.scss';
import { connect } from "react-redux";
import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";
import { User } from 'interfaces';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "redux/user";
import { selectCartHidden } from "redux/cart";

interface Props {
  currentUser?: User
  hidden: boolean
}

class Header extends React.Component<Props, any> {
  render() {
    return <div className={'header'}>
      <Link className={'logo-container'} to={'/'}>
        <Logo className={'logo'}/>
      </Link>
      <div className={'options'}>
        <Link className={'options'} to={'/shop'}>
          SHOP
        </Link>
        <Link className={'option'} to={'/shop'}>
          CONTACT
        </Link>
        {
          this.props.currentUser ? (
            <div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
          ) : (
            <Link className={'option'} to={'/signIn'}>SIGN IN</Link>
          )
        }
        <CartIcon/>
      </div>
      {this.props.hidden ? null : <CartDropdown/>}
    </div>
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
