import React from 'react';
import SignIn from "components/sign-in/sign-in.component";
import SignUp from "components/sign-up/sign-up.component";

import './sign-in-and-sign-up.styles.scss';

class SignInAndSignUpPage extends React.Component<any, any> {
  render() {
    return <div className={'sign-in-and-sign-up'}>
      <SignIn/>
      <SignUp/>
    </div>;
  }
}

export default SignInAndSignUpPage;
