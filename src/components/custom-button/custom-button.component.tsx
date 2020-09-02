import React from 'react'
import './custom-button.styles.scss';

class CustomButton extends React.Component<any, any> {
  render() {
    const {children, isGoogleSignIn, inverted, ...otherProps} = this.props;
    return <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  }
}

export default CustomButton;
