import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #3F51B5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return (
    <>
      <Container>
        Free shipping on all orders over $100!!!
      </Container>
    </>
  )
}

export default Announcement;