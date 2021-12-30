import { Room, Facebook, Instagram, LinkedIn, MailOutline, Phone, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1;
display:flex; 
flex-direction:column; 
padding:20px;
`;
const Logo = styled.h1``
const Desc = styled.p`
margin:20px 0px; 
`
const SocialContainer = styled.h1`
display:flex;
`
const SocialIcon = styled.h1`
width:40px; 
height:40px; 
border-radius:50%;
color:white;
background-color: #${props =>props.color};
display:flex; 
align-items:center;
justify-content:center;
margin-right:20px; 

`


const Center = styled.div`
flex:1;
padding:20px;
`;

const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin:0; 
padding:0; 
list-style:none; 
display:flex;
flex-wrap:wrap; 
`

const ListItem = styled.li`
width:50%; 
margin-bottom:10px;
`

const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px; 
display:flex; 
align-items:center;
`

const CreatedBy = styled.p`
margin-bottom:20px;
`




const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>MY-WAY</Logo>
            <Desc>MY-Way is your online sport Shop  </Desc>
            <CreatedBy>Created By <b>Jordi Roca Soler</b></CreatedBy>
            <SocialContainer>
                <SocialIcon color ="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color ="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color ="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color ="3B5999">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
<Title>Contact</Title>
<ContactItem><Room style={{marginRight:"10px"}}/>
    Nou de la Rambla 27, Barcelona 08000
</ContactItem>
<ContactItem><Phone style={{marginRight:"10px"}}/>
    +34 622 588 996
</ContactItem>
<ContactItem><MailOutline style={{marginRight:"10px"}}/>
    jordirocasoler94@gmail.com
</ContactItem>


            </Right>
        </Container>
    )
}

export default Footer
