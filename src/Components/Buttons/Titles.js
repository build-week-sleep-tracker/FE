import React from 'react'
import styled from 'styled-components'
import Bed from '../../images/Bed.svg';
import Clock from '../../images/Clock.svg';
import Device from '../../images/Device.svg';
import Face from '../../images/Face.svg';
import Star from '../../images/Star.svg';


const Container = styled.div`
height: 400px;
width: 20%;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-between;

`
const LogSleep = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color:#BFB6F1
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;
`
const Alarm = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color:#9D90EA;
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;
`
const SleepQ = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color: #6F5BE0
color: white;
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;

`
const Moods = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color: #4D35D4
color: white;
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;

`
const Devices = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color:#3421A1
color: white;
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;
`
const Insights = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color:#100359
color: white;
font-size: 30px;
padding-top: 20px;
display: flex;
flex-direction: row;
`

export default function Titles() {
    return (
        <Container>
        <LogSleep>
            <img src={Bed} />
            <h3>Log Sleep</h3>
        </LogSleep>
        <Alarm>
            <img src={Clock} />
            <h3>Alarm</h3>
        </Alarm>
        <SleepQ>
        <img src={Star} />
            <h3>Sleep Quality</h3>
        </SleepQ>
        <Moods>
        <img src={Face} />
            <h3>Moods</h3>
        </Moods>
        <Devices>
        <img src={Device} />
            <h3>Devices</h3>
        </Devices>
        <Insights>
        <img src={Star} />
            <h3>Insights</h3>
        </Insights>
        </Container>

    )
}
