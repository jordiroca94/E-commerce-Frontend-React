import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ProfileCard = styled.div``;

const WelcomeMsg = styled.h1``;

const Username = styled.p``;

const Email = styled.p``;

const Orders = styled.div``;

const Profile = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Wrapper>
          <ProfileCard>
            <WelcomeMsg>
                Hello Jordi 
            </WelcomeMsg>
            <Username>
                Username:
            </Username>
            <Email>
                Email:
            </Email>
            <Orders>
                Orders:
            </Orders>
          </ProfileCard>
        </Wrapper>

        <Footer />
      </Container>
    </div>
  );
};

export default Profile;
