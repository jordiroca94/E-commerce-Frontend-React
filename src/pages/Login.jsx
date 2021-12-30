import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
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
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
  margin-bottom:10px;
`;

const Link = styled.a`
margin:5px 0px; 
front-size:12px; 
text-decoration:underline;
cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Dont you remember your password?</Link>
          <Link>Not a member? Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
