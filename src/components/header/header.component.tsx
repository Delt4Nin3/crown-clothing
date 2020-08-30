import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "assets/crown.svg";
import { auth } from 'firebase/firebase.utils';
import './header.styles.scss';

interface User {
  id: string
  displayName: string
  email: string
  createdAt: unknown
}

interface Props {
  currentUser?: User
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
            <div className={'option'} onClick={() => auth().signOut()}>SIGN OUT</div>
          ) : (
            <Link className={'option'} to={'/signIn'}>SIGN IN</Link>
          )
        }
      </div>
    </div>
  }
}

export default Header;
