import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Title = styled.h1``;

const FilterContainer = styled.div``;

const Filter = styled.div``;


const ProductList = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />

        <Title>Outfits</Title>

        <FilterContainer>
          <Filter>filter 1</Filter>
          <Filter>filter 2</Filter>
        </FilterContainer>
      </Container>
    </>
  )
}

export default ProductList