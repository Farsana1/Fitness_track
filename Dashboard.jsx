import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import {counts} from "../utils/data.js";
import CountsCard from "../components/cards/CountsCard.jsx";
import WeeklyStatCard from "../components/cards/WeeklyStatCard.jsx";
import CategoryChart from "../components/cards/CategoryChart.jsx";
import AddWorkout from "../components/AddWorkout.jsx";
import WorkoutCard from '../components/cards/WorkoutCard.jsx';
import {addWorkout, getDashboardDetails,getWorkout } from '../api/index.js';

const Container=styled.div`
flex:1;
max-width:1300px;
height:100vh;
display:flex;
justify-content:center;
padding-top:500px;
  margin-top:500px;
padding-left:0px;
flex-direction:column;
@media(max-width:768px){
padding-top:650px;
  margin-top:650px;
}
`;

const Left=styled.div`
justify-content:flex-end;
display:flex;
padding-left:0px;
flex-direction:column;
`;
const Wrapper=styled.div`
max-width:1400px;
display:flex;
justify-content:flex-start;
flex-direction:column;
gap:22px;
@media(max-width:768px){
gap:12px;
}`;

const Title=styled.div`
padding: 0px 16px;
fontsize:22px;
color:${({theme})=>theme.text_primary};
font-weight:500;
`;

const FlexWrap=styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  gap: 22px;
  @media(max-width:600px){
gap:12px;
}
  `;
  const FlexWrap1=styled.div`
  display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    gap: 22px;
    @media(max-width:600px){
  gap:12px;
  padding-top:30px;
  margin-top:30px;
  }
    `;
const Section=styled.div`
display:flex;
flex-direction:column;
padding:0px 16px;
@media (max-width:600px){
gap:70px;
padding: 100px;}
`;

  const CardWrapper = styled.div`
  display:flex;
flex-direction:column;
justify-content:center;
@media (max-width:600px){
gap:22px;}
`;

const Dashboard = () => {
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState();
  const [buttonLoading,setButtonLoading]=useState(false);
  const [todaysWorkouts,setTodaysWorkouts]=useState([]);
  const [workout,setWorkout]=useState(`#Legs
    Back Squat
    5 sets*15 reps
    30kg
    10min`);
   
    const dashboardData=async()=>{
      setLoading(true);
      const token=localStorage.getItem("fitness-app-token");
      await getDashboardDetails(token).then((res)=>{
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      });
    };
    const getTodaysWorkout = async () => {
      setLoading(true);
      const token = localStorage.getItem("fittrack-app-token");
      await getWorkout(token, "").then((res) => {
        setTodaysWorkouts(res?.data?.todaysWorkouts);
        console.log(res.data);
        setLoading(false);
      });
    };
      const addNewWorkout=async()=>{
        setButtonLoading(true);
        const token= localStorage.getItem("fitness-app-token")
      await addWorkout(token,{workoutString:workout}).then((res)=>{
      dashboardData();
      setButtonLoading(false);
    }) .catch((err)=>{
      alert(err);
    });
      };

    useEffect(()=>{
      dashboardData();
      getTodaysWorkout();
    },[]);

  return (
   <Container>
    <Left>
<Wrapper>
  <Title>Dashboard</Title>
  <FlexWrap>
    {counts.map((item)=>(
    <CountsCard item={item} data={data}/>
    ))}
  </FlexWrap>

  <FlexWrap1>
    <WeeklyStatCard data={data}/>
    <CategoryChart data={data}/>
    <AddWorkout workout={workout} setWorkout={setWorkout} addNewWorkout={addNewWorkout} buttonLoading={buttonLoading} />
      </FlexWrap1>
      <Section>
        <Title>Todays Workouts</Title>
        <CardWrapper>
          {todaysWorkouts.map((workout)=>(
            <WorkoutCard workout={workout}/>
          ))}
        </CardWrapper>
      </Section>
</Wrapper></Left>
   
  
   </Container>
   
  );
}

export default Dashboard;