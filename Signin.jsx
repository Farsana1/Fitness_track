import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/reducer/userSlice'; 
import { UserSignIn } from '../api';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 36px;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handelSignIn = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignIn({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          alert("Login Success");
          setLoading(false);
          setButtonDisabled(false);
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.message);
          } else {
            alert("An error occurred during sign-in. Please try again later.");
          }
          setLoading(false);
          setButtonDisabled(false);
        });
    }
  };
  
  const UserSignIn = async ({ email, password }) => {
    try {
      const response = await fetch('/api/user/signin', {
        method: 'POST',
        // ... other request details
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      return response.json();
    } catch (err) {
      throw new Error(err.message || "An error occurred during sign-in.");
    }
  };
  return (
    <Container>
       <div>
        <Title>Welcome to Fittrack 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
      
      <TextInput
      label="Email Address"
      placeholder="Enter your email address"
      value={email}
      handelChange={(e) => setEmail(e.target.value)}
    />
    <TextInput
      label="Password"
      placeholder="Enter your password"
      password
      value={password}
      handelChange={(e) => setPassword(e.target.value)}
    />
    <Button
      text="SignIn"
      onClick={handelSignIn}
      isLoading={loading}
      isDisabled={buttonDisabled}
    />
      </div>
    </Container>
  );
};

export default SignIn;
