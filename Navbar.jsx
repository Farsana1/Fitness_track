import React,{useState} from 'react'
import styled from "styled-components";
import {Link as LinkR,NavLink} from "react-router-dom";
import LogoImg from "../utils/images/Logo.png"
import {MenuRounded} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { logout } from '../redux/reducer/userSlice';
import { useDispatch } from 'react-redux';
import userSlice from '../redux/reducer/userSlice';

const Nav=styled.div`
background-color:${({theme})=>theme.bg};
height:80px;
width:100%;
max-width:1280px;
display:flex;
position:fixed;
align-items:center;
justify-content:space-between;
top:0;
z-index:10;
color:white;
border-bottom:1.5px solid ${({theme})=>theme.text_secondary+20};
@media screen and (max-width:768px){
width:100%;
top:0;
position:fixed;}`;

const NavContainer=styled.div`
max-width:1280px;
width:100%;
display:flex;
max-width:1400px;
padding:0 24px;
gap:14px;
font-size:1rem;
`;

const NavLogo=styled(LinkR)`
max-width:1280px;
width:100%;
display:flex;
align-items:center;
gap:16px;
padding:0 6px;
font-size:18px;
text-decoration:none
color:${({theme})=>theme.black};
`;

const Logo=styled.img`
height:42px;
display:flex;`;

const Mobileicon=styled.div`
color:${({theme})=>theme.text_primary};
display:none;
@media screen and (max-width:768px){
    display:flex;
    align-items:center;
    cursor:pointer;
    display:flex;
};
`;

const NavItems=styled.ul`
display:flex;
align-items:center;
justify-content:center;
gap:32px;
list-style:none;
@media screen and (max-width:768px){
display:none;}`;

const Navlink=styled(NavLink)`
display:flex;
align-items:center;
cursor:pointer;
transition:all 1s slide-in;
color:${({theme})=>theme.text_primary};
font-weight:450;
text-decoration:none;
&:hover{
color:${({theme})=>theme.primary};
}
&.active{
color:${({theme})=>theme.black};
border-bottom:1.8px solid ${({theme})=>theme.primary};
}
`;

const UserContainer=styled.div`
display:flex;
justify-content:flex-end;
gap:16px;
align-items:center;
color:${({theme})=>theme.primary};`;

const TextButton=styled.div`
color:${({theme})=>theme.secondary};
cursor:pointer;
font-size:16px;
transition:all 0.3s ease;
font-weight:500;`;

const MobileMenu=styled.ul`
display:none;
@media screen and (max-width:768px){
max-width:768px;
display:flex;
flex-direction:column;
align-items:flex-start;
gap:16px;
list-style:none;
width:90%;
padding:12px 15px 24px 40px;
background:${({theme})=>theme.bg};
position:absolute;
top:80px;
right:0;
transition:all 0.6s ease-in-out;
transform:${({isOpen})=>
    isOpen ? "translateY(0)":"translateY(-100%)"
};
border-radius:0 0 20px 20px;
box-shadow:20px 30px 20px 20px;
opacity:${({isOpen})=>(isOpen?"100%":"0%")};
z-index:${({isOpen})=>(isOpen?"1000%":"-1000%")};
display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
}`;


const Navbar = ({currentUser}) => {
    const dispatch=useDispatch();
    const [isOpen,setIsOpen]=useState(false);
  return (
    <Nav><NavContainer>
        <Mobileicon onClick={()=>setIsOpen(!isOpen)}>
            <MenuRounded sx={{color:'inherit'}} />
        </Mobileicon>
<NavLogo to="/">
<Logo src={LogoImg}/> Fitness
</NavLogo>

<MobileMenu isOpen={isOpen}>
    <Navlink to="/">Dashboard</Navlink>
    <Navlink to="/Workouts">workout</Navlink>
    <Navlink to="/Tutorial">Tutorial</Navlink>
    <Navlink to="/Services">services</Navlink>
    <Navlink to="/Contact">contact</Navlink>
</MobileMenu>
<NavItems>
    <Navlink to="/">Dashboard</Navlink>
    <Navlink to="/workouts">workout</Navlink>
    <Navlink to="/Tutorial">Tutorial</Navlink>
    <Navlink to="/services">services</Navlink>
    <Navlink to="/contact">contact</Navlink>
</NavItems>
<UserContainer>
    <Avatar>
        <TextButton onClick={()=>dispatch(logout())}> Log Out</TextButton>
    </Avatar>
</UserContainer>
        </NavContainer></Nav>
  );
};

export default Navbar