import React from 'react'
import styled from 'styled-components'


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
`
const Alarm = styled.div`
height: 300px;
width: 100%;
border 1px solid black;
text-align: center;
background-color:#9D90EA;
font-size: 30px;
padding-top: 20px;
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
`

export default function Titles() {
    return (
        <Container>
        <LogSleep>
            <h3>Log Sleep</h3>
        </LogSleep>
        <Alarm>
            <h3>Alarm</h3>
        </Alarm>
        <SleepQ>
            <h3>Sleep Quality</h3>
        </SleepQ>
        <Moods>
            <h3>Moods</h3>
        </Moods>
        <Devices>
            <h3>Devices</h3>
        </Devices>
        <Insights>
            <h3>Insights</h3>
        </Insights>
        </Container>

    )
}
