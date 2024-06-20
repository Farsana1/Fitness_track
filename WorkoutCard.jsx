import React from 'react'
import styled from "styled-components";
import { FitnessCenterRounded } from '@mui/icons-material';
import { TimelapseRounded } from '@mui/icons-material';

const Card=styled.div`
flex:1;
min-width:200px;
padding: 24px;
border:1px solid white;
border-radius:14px;
box-shadow:1px 6px 20px 0px;
box-width:300px;
height:60%;
width:100%;
display:flex;
gap:60px;
@media (max-width:600px){
height:50%;
width:60%;
overflow:auto;
}`;
const Category=styled.div`
width:fit-content;
font-size:14px;
color:${({theme})=>theme.primary};
font-weight:500;
padding;4px 10px;
border-radius:8px;
`;
const Name=styled.div`
font-size:20px;
color:${({theme})=>theme.text_primary};
font-weight:500;
`;
const Sets=styled.div`
font-size:15px;
color:${({theme})=>theme.text_secondary};
font-weight:400;
display:flex;
gap:6px;`;
const Flex=styled.div`
display:flex;
gap:6px;
`;
const Details=styled.div`
font-siz;15px;
color:${({theme})=>theme.text_primary};
font-weight:400;
display:flex;
align-items:center;
gap:6px;
`;

const WorkoutCard = () => {
  return (
    <Card>
        <Category>#Legs</Category>
        <Name>Back Squat</Name>
        <Sets>
            counts:5sets x 10 reps
        </Sets>
        <Flex>
            <Details>
                <FitnessCenterRounded sx={{fontSize:"20px"}}/>
                 30kg
            </Details>
            <Details>
                <TimelapseRounded sx={{fontSize:"20px"}}/>
                 30kg
            </Details>
        </Flex>
        </Card>
  )
}

export default WorkoutCard