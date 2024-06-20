// Authentication.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import AuthImage from '../utils/images/AuthImage.jpg';
import LogoImage from '../utils/images/Logo.png';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;

const Left = styled.div`
  flex: 1;
 width:100%;
 flex-direction:column;
  position: relative;
 object-fit:cover;
  @media (max-width:700px){
  display:none};
`;

const Right = styled.div`
  flex: 1;
  position:relative;
  flex-direction:column;
  padding:40px;
`;

const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
   @media (max-width:400px){
  display:none};
`;

const Image = styled.img`
  position: absolute;
  width: 75%;
  height: 75%;
   @media (max-width:400px){
   display:none};
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  position: relative;
  @media (max-width:400px){
  font-size:14px};
`;

const TextButton = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right>
        {!login ? (
          <>
            <Signin />
            <Text>
              Don't have an account?{' '}
              <TextButton onClick={() => setLogin(true)}>Signup</TextButton>
            </Text>
          </>
        ) : (
          <>
            <Signup />
            <Text>
              Already have an account?{' '}
              <TextButton onClick={() => setLogin(false)}>Signin</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
