import React from 'react';
import SignIn from "components/sign-in/sign-in.component";

class SignInAndSignUpPage extends React.Component<any, any> {
  render() {
    return <div className={'sign-in-and-sign-up'}>
      <SignIn/>
    </div>;
  }
}

export default SignInAndSignUpPage;
