import React from 'react';
import './sign-in.styles.scss'
import FormInput from "components/form-input/form-input.component";
import CustomButton from "components/custom-button/custom-button.component";

interface State {
  email: string
  password: string
}

class SignIn extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    // @ts-ignore-next-line
    this.setState({[name]: value});
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  render() {
    return <div className={'sign-in'}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput name={'email'} type={'email'} value={this.state.email} handleChange={this.handleChange} label='Email'
                   required/>
        <FormInput name={'password'} type={'password'} value={this.state.password} handleChange={this.handleChange}
                   label='Password' required/>
        <CustomButton type={'submit'}>Sign In</CustomButton>
      </form>
    </div>
  }
}

export default SignIn;
