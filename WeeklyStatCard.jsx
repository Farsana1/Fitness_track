import React from 'react'
import styled from "styled-components";
import {BarChart} from "@mui/x-charts/BarChart";

const Card=styled.div`
flex:1;
min-width:200px;
overflow:auto;
padding:10px;
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
height:30%;
width:30%;
flex:1;
}

`;
const Title=styled.div`
font-weight:500;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width:600px){
font-size:12px;}`;

const WeeklyStatCard = ({data}) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt &&
       (<BarChart xAxis={[
        {scaleType: "band",data:data?.totalWeeksCaloriesBurnt?.weeks},
       ]}
       series={[{data:data?.totalWeeksCaloriesBurnt?.caloriesBurned}]}
       height={300}
       />
       )}
</Card>
);};

export default WeeklyStatCard