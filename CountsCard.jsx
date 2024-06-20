import React from 'react'
import styled from "styled-components";
import { counts } from "../../utils/data";


const Card=styled.div`
max-width:1200px;
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
}
`;

const Title=styled.div`
font-weight:500;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width:600px){
font-size:12px;}
`;

const Left=styled.div`
justify-content:left;
display:flex;
flex:1;
flex-direction:column;
gap:6px;
width:100%;
  position: relative;
 object-fit:cover;
@media (max-width:600px){
gap:6px;}
`;
const Value=styled.div`
font-weight:500;
font-size:22px;
color:black;
@media (max-width:600px){
font-size:20px;}
gap:8px
`;
const Unit=styled.div`
font-size:13px;
margin-bottom:8px;
`;
const Span=styled.div`
font-size:13px;
margin-bottom:8px;
font-weight:500;
@media (max-width:600px){
font-size:10px;}
${({positive,theme})=>
  positive?
     `color:green;`
     :
     `color:red;`    
}
`;

const Icon=styled.div`
display:flex;
padding:8px;
height:fit-content;
align-items:center;
border-radius:12px;
padding-right:0px;
${({color,bg})=>`
background:${bg};
color:${color};
`}
`;
const Desc=styled.div`
font-size:14px;
color:${({theme})=>theme.text_secondary};
margin-bottom:6px;
@media (max-width:600px){
font-size:10px;}
`;

const color = counts.map(item => item.color);
const unit = counts.map(item => item.unit);
const item = counts.map(item => item.name);
const CountsCard = ({item,data}) => {
  return (
   <Card>
    <Left>
        <Title>{item.name} </Title>
        <Value>{data && data[item.key].toFixed(2)}
            <Unit>
                {item.unit}
                </Unit>
                <Span positive>
                (+10%)    </Span></Value>
    <Desc>{item.desc}</Desc>
    <Icon color={item.color} bg={item.lightColor}>{item.icon}</Icon>
    </Left>
    </Card>
  )
}

export default CountsCard