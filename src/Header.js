import React from 'react';
import styled from 'styled-components';
import amazonLogo from './assets/img/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Container>
        <HeaderLogo>
          <Link to="/">
            <img src={amazonLogo} />
          </Link>
        </HeaderLogo>
        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select Your Address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>
        {/* ---Search Input-----  */}
        <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>
        {/* ----NavItems---- */}
        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, Mateo</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingBasketIcon />
              <CartCount>4</CartCount>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.header`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 15px;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: #fff;

  :focus-within {
    box-shadow: 0 0 0 2px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;

  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  padding: 10px 9px;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    color: #fff;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;
