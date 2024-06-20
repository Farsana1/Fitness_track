import React,{useState} from 'react'
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Card=styled.div`
flex:1;
min-width:200px;
overflow:auto;
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
height:50%;
width:60%;
overflow:scroll;
}

`;
const Title=styled.div`
font-weight:500;
font-size:16px;
color:${({theme})=>theme.primary};
@media (max-width:600px){
font-size:12px;}`;

const AddWorkout = ({workout,setWorkout,AddNewWorkout,buttonLoading}) => {
   
  return (
    <Card>
      <Title> Add New Workout </Title>
      <TextInput 
      label="Workout"
      textArea
      rows={10}
      placeholder={`Enter in this format:
      #Category
      -Workout name
      -Sets
      -Reps
      -weight
      -Duration`}
      value={workout}
      handelChange={(e)=>setWorkout(e.target)} /> 
<Button text="Add Workout" style={{ padding: '10px 20px ' }} 
onClick={()=>AddNewWorkout()}
isLoading={buttonLoading}
isDisabled={buttonLoading}
/>
</Card>
);};

export default AddWorkout;