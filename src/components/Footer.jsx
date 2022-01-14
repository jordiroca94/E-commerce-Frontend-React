import {
  Room,
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: gray;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const CreatedBy = styled.p`
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MY-WAY</Logo>
        <Desc>MY-Way is your online sport Shop </Desc>
        <CreatedBy>
          Created By <b>Jordi Roca Soler</b>
        </CreatedBy>
        <SocialContainer>
          <a href="https://www.facebook.com/jordi.roca.33/" target="blank">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com/joordii9/" target="blank">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/jordi-roca-soler/"
            target="blank"
          >
            <SocialIcon color="3B5999">
              <LinkedIn />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItem>Home</ListItem>
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <ListItem>Cart</ListItem>
          </Link>
          <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <ListItem>My Account</ListItem>
          </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Nou de la Rambla 27, Barcelona 08000
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +34 622 588 996
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          jordirocasoler94@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
