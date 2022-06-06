import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Title = styled.h1``;

const FilterContainer = styled.div``


const ProductList = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />

        <Title>Outfits</Title>

        <FilterContainer>
          <Filter></Filter>
          <Filter></Filter>
        </FilterContainer>
      </Container>
    </>
  )
}

export default ProductList