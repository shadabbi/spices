import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token)
  }
 
 
 
  render() {
    return (
     
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51HiKRGJfLerazQKfpNmfCddSknJr6rXzVgLcIqHR2RdrvYO8vIxk07lAKcpIduuaXTCq8Bxjmb4woIvOjS3qypq700Nipvgm3P"
        name="Spices LTD"
        image='https://lh3.googleusercontent.com/a-/AOh14GgLQvLCitC9j1FeJdF1GR_RV56nk6DBImb4R3JVqg=s96-c'
        amount={this.props.price}
        currency='INR'
        email
        billingAddress
        shippingAddress
        description={`Your total is RS ${this.props.price}`}
        panelLabel='Pay Now'
      />
    )
  }
}

