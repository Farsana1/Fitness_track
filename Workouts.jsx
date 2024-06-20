import React from 'react'
import styled from "styled-components";
import WorkoutCard from '../components/cards/WorkoutCard';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateCalendar} from '@mui/x-date-pickers';

const Container=styled.div`
flex:1;
min-width:200px;
overflow:auto;
padding:88px;
border:1px solid white;
border-radius:14px;
box-shadow:1px 6px 20px 0px;
box-width:300px;
height:100%;
width:100%;
display:flex;
flex-direction:column;
gap:6px;
@media (max-width:600px){
padding:60px;
height:50%;
width:60%;
overflow:scroll;
}

`;
const Wrapper=styled.div`
flex:1;
max-width:1600px;
display:flex;
gap:22px;
padding:0px 16px;
@media (max-width:600px){
gap:12px;
flex-direction:column;
}
`;
const Left=styled.div`
flex:0.2;
height:fit-content;
padding:18px;
border:1px solid ${({theme})=>theme.text_primary +20};
border-radius:14px;
box-shadow:1px 6px 20px 0px ${({theme})=>theme.primary +10};
`;
const Title=styled.div`
font-weight:500;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width:600px){
font-size:14px;
}
`;
const Right=styled.div`
flex:1;
padding-left:0px;
`;
const Section=styled.div`
display:flex;
flex-direction:column;
padding:20px 16px;
gap:22px;
@media (max-width:600px){
gap:12px;
}
`;
const SecTitle=styled.div`
font-size:22px;
color:${({theme})=>theme.text_primary};
font-weight:500;

`;
const CardWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;
margin-bottom:100px;
@media (max-width:600px){
gap:12px;
padding-left:0px;
}
`;

const Workouts = () => {
  return (
    <Container>
<Wrapper>
  <Left>
    <Title>Select Date</Title>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar/>
    </LocalizationProvider>
  </Left>
  <Right>
  <Section>
    <SecTitle>
        Todays Workout
    </SecTitle>
    <CardWrapper><WorkoutCard/>
    <WorkoutCard/>
    <WorkoutCard/>
    <WorkoutCard/>
    <WorkoutCard/>
    <WorkoutCard/>
    <WorkoutCard/>
    </CardWrapper>
    </Section>  
  </Right>
</Wrapper>
    </Container>
  )
}

export default Workouts