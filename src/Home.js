import React from 'react';
import styled from 'styled-components';
import banner from './assets/img/banner-amazon.jpg';
import Product from './Product';

const Home = () => {
  return (
    <>
      <Container>
        <Banner></Banner>
        <Content>
          <Product />
          <Product />
        </Content>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.section`
  max-width: 1400px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  min-height: 600px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  background: #fff;
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`;
