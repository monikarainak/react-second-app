import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K7CHHSJflnhiVp3NpQUEZar50DN7erdnj6X0hecldkFvVGfJ63CfCDWGZfgCedxfaxHO1mKZwB06fZYJ8J55scR008wq7uORU';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image="https://i.pinimg.com/originals/de/7c/e4/de7ce48f483468ed4cc8a5b92742cad5.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;