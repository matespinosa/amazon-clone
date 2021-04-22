import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;

const Container = styled.section`
  height: 300px;
  margin-right: 18px;
  background-color: #fff;
  flex: 0.8;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const ItemsContainer = styled.div``;
