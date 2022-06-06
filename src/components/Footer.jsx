import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2`
  font-weight: bold;
  color: black;
`;

const Desc = styled.p`
  margin: 20px 0px;

`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`; 

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>
            LAMA<span style={{color:"#2F21C7"}}>ecommerce</span>.
          </Logo>

          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloremque atque mollitia in optio soluta hic cum non a quidem!
          </Desc>

          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>

            <SocialIcon color="E4405F">
              <Twitter />
            </SocialIcon>

            <SocialIcon color="55ACEE">
              <Instagram />
            </SocialIcon>

            <SocialIcon color="2C5999">
              <LinkedIn />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Navigation</Title>

          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Blog</ListItem>            
          </List>
        </Center>

        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
            <Room style={{marginRight: "10px"}} />
            419, 5th Avenue, New York
          </ContactItem>

          <ContactItem>
            <Phone style={{marginRight: "10px"}} />
            +2348 1977 7929
          </ContactItem>

          <ContactItem>
            <MailOutline style={{marginRight: "10px"}} />
            contact@lamaecommerce.com
          </ContactItem>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </>
  )
}

export default Footer;