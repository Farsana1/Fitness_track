
import React from 'react'
import styled from "styled-components";
import {PieChart} from "@mui/x-charts/PieChart";

const Card=styled.div`
min-width:200px;
padding:30px;
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
height:70%;
width:60%;
}

`;
const Title=styled.div`
font-weight:500;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width:600px){
font-size:12px;}`;

const CategoryChart = ({data}) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData &&
       (<PieChart
        series={[{
            data:data?.pieChartData,
            innerRadius:20,
            paddingAngle:3,
            cornerradius:5,
        },
    ]}
        height={300}
       />
       )}
</Card>
);};

export default CategoryChart
