import React from 'react';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';


const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${'' /* ${mobile(
    {padding: "10px", flexDirection: "column"}
  )} */}

  @media only screen and (max-width: 380px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile(
    {height: "40vh"}
  )}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile(
    {padding: "10px"}
  )}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile(
    {width: "100%"}
  )}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile(
    {width: "100%"}
  )}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700:
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #3F51B5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #3F51B5;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: grey;
  }
`;



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.jackjones.com/dw/image/v2/ABBT_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw24cbf597/pim-static/large/12203652_White_007_ProductLarge.jpg?sw=685" />
        </ImgContainer>

        <InfoContainer>
          <Title>jack & jones Shoes</Title>
          <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nesciunt ipsa, inventore blanditiis, maxime alias cumque consectetur, fugiat cupiditate voluptate reprehenderit hic aliquam ipsum placeat deserunt.
          </Desc>
          <Price>₦ 20</Price>
          
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="red" />
              <FilterColor color="black" />
              <FilterColor color="grey" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>43</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>39</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer> 
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product