import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;

  ${mobile({
    backgroundColor: "red",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile(
    {padding: "10px 0px"}
  )}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile(
    {display: "none"}
  )}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #ccc;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile(
    {width: "50px"}
  )}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h2`
  font-weight: bold;
  text-align: center;
  color: black;
  ${mobile(
    {fontSize: "24px"}
  )}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile(
    {justifyContent: "center"}
  )}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile(
    {fontSize: "12px", marginLeft: "10px"}
  )}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <Search style={{
              color:"gray",
              fontSize: "17px",
            }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>LAMA<span style={{color:"#2F21C7"}}>ecommerce</span>.</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign-in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;