import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const CartTotal = ({ getTotalPrice, getCount }) => {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getCount()} Items) :
        <NumberFormat
          value={getTotalPrice()}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.section`
  height: 200px;
  flex: 0.4;
  padding: 20px;
  background-color: #fff;

  @media (max-width: 400px) {
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Subtotal = styled.h2`
  margin-bottom: 0.5rem;
`;

const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 2px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;

  :hover {
    background-color: #ddb347;
  }
`;
