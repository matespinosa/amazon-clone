import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from './assets/img/banner-amazon.jpg';
import Product from './Product';
import { db } from './firebase';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    console.log('call products');
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Banner></Banner>
        <Content>
          {products.map((data) => (
            <Product
              key={data.id}
              title={data.product.name}
              price={data.product.price}
              rating={data.product.rating}
              image={data.product.image}
            />
          ))}
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
  /* background: #fff; */
  padding: 0 10px;
  margin-top: -350px;
  display: flex;
`;
