import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "assets/crown.svg";
import './header.styles.scss';

class Header extends React.Component<any, any> {
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
      </div>
    </div>
  }
}

export default Header;
