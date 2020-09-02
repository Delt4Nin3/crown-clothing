import React from 'react'
import './custom-button.styles.scss';

// Todo: refactor to class Component?
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}: any) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
