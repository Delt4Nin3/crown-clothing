import React from "react";
import StripeCheckout from 'react-stripe-checkout';

class StripeCheckoutButton extends React.Component<any, any> {
  onToken = (token: any) => {
    console.log(
      token
    )
  }

  render() {
    const amount = this.props.price * 100;

    const publishableKey = "pk_test_51HO1uCGe53gr1Kcl7GQdE0AdXnHi5FOyd50aQoqgIm7jDnoIeNn8QyLywdF34VNZ5vSMWG5nbSCt8OynFNNVvsXV00j4ToOVdR";

    return <StripeCheckout amount={amount}
                           currency={'USD'}
                           stripeKey={publishableKey}
                           panelLabel={'Pay Now'}
                           label={'Pay Now'}
                           name={'Crown Clothing Ltd.'}
                           token={this.onToken}
    />;
  }
}

export default StripeCheckoutButton;
