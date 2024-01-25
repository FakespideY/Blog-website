import React, { useState } from "react";
import { Box, TextField, Button, Typography, styled } from "@mui/material";

// styled components
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0 0 0/20%);
`;

const signupInitialValues = {
  name: "",
  email: "",
  password: "",
};

// Change function name to start with an uppercase letter
const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  //..................hooks...................
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  //..................functions ..........................
  const toggleSignup = () => {
    toggleAccount(account === "signup" ? "login" : "signup");
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Login" />
        {account === "login" ? (
          <Wrapper>
            <TextField label="Enter username" variant="standard" />
            <TextField label="Enter password" variant="standard" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              label="Enter Name"
              onChange={(e) => onInputChange(e)}
              name="Name"
              variant="standard"
            />
            <TextField
              label="Enter Email"
              onChange={(e) => onInputChange(e)}
              name="Email"
              variant="standard"
            />
            <TextField
              label="Enter password"
              onChange={(e) => onInputChange(e)}
              name="Password"
              variant="standard"
            />
            <SignupButton>Signup</SignupButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
