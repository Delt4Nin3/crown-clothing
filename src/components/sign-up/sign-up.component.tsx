import React from "react";

import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "firebase/firebase.utils";

import './sign-up.styles.scss';

interface State {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

class SignUp extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    // @ts-ignore-next-line
    this.setState({[name]: value});
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password, confirmPassword, displayName} = this.state;

    if (password !== confirmPassword) {
      alert("passwords not match");
      return;
    }

    try {
      const {user} = await auth().createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.log(error);
    }

  }

  render() {
    return <div className={'sign-up'}>
      <h2 className={'title'}>I do not have a account</h2>
      <span>Sign up  with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput handleChange={this.handleChange}
                   name={'displayName'}
                   type={'text'}
                   value={this.state.displayName}
                   label='Display Name'
                   required/>
        <FormInput handleChange={this.handleChange}
                   name={'email'}
                   type={'email'}
                   value={this.state.email}
                   label='Email'
                   required/>
        <FormInput handleChange={this.handleChange}
                   name={'password'}
                   type={'password'}
                   value={this.state.password}
                   label='Password'
                   required/>
        <FormInput handleChange={this.handleChange}
                   name={'confirmPassword'}
                   type={'password'}
                   value={this.state.confirmPassword}
                   label='Password Confirmation'
                   required/>
        <div>
          <CustomButton type={'submit'}>Sign Up</CustomButton>
        </div>
      </form>
    </div>;
  }
}

export default SignUp;
