import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/apiCalls";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const AlreadyMember = styled.p`
  color: grey;
  margin: 20px px;
  front-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  padding: 7px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 15px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    signup(dispatch, { username, password, email });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT </Title>
        <Form>
          <Input
            placeholder="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
          {error && <Error>You are missing some credentials</Error>}
          <Link to="/login">
            <AlreadyMember>
              Already a Member? Click here to Login In !
            </AlreadyMember>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
