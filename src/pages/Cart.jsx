import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "none" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
 08135659765
`;


const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>

        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(4)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw24cbf597/pim-static/large/12203652_White_007_ProductLarge.jpg?sw=685" />
                <Details>
                  <ProductName><b>Product:</b>Jack&Jones Shoes</ProductName>
                  <ProductId><b>ID:</b>984237443</ProductId>
                  <ProductColor />
                  <ProductSize><b>Size:</b> 42</ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                Price
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            Summary
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Cart