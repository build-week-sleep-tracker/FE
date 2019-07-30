import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import styled from "styled-components";

const GraphWrapper = styled.div`
    width: 100vw;
    background-color: rgb(229,225,248);
`
const GraphTitle = styled.div`

`
export default function GraphCanvas(){
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() =>{
        const chartData = {
            //labels: TimeLabels,
            datasets: [
                {
                    label: "Percent Use",
                    fill: 'origin',
                   // backgroundColor: gradient,
                    lineTension: 0.3,
                    borderColor: '#75D9FE',
                    borderCapStyle: 'round',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#3c8dbc",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#3c8dbc",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    //data: CPUData,
                    spanGaps: false,
                }
            ]
        }
          setData(chartData);

          const chartOptions = {
            title: {
                display: true,
                text: 'CPU Usage (as Percent Total)'
            },
            legend: {
                display: false,
            },
            animation: {
                duration: 1,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
          setOptions(chartOptions)
    }, [])

    return(
        <div>
            <h2>Hours Slept</h2>
            <h4>7/5 - 7/15</h4>

            <GraphWrapper>
                <Line data={data} options={options}/>
            </GraphWrapper>
        </div>
    )
}

// export default function GraphCanvas(){
//     const [data, setData] = useState([]);
//     const [options, setOptions] = useState([]);

//     useEffect(() =>{
//         const chartData = {
//             labels: ['','','','','','','','',''],
//             datasets: [{
//                 label: '',
//                 data: [9,7,8,5,9,8,7,10,9],
//                 backgroundColor:'rgb(17,3,89)'
//               }]
//           }
//           setData(chartData);

//           const chartOptions = {
//             scales: {
//                 xAxes: [{
//                     barPercentage: .5,
//                     gridLines: {
//                         offsetGridLines: true
//                     }
//                 }],

//                 yAxes: [{
//                     ticks: {
//                         min: 0,
//                         //suggestedMax: 100
//                     }
//                 }]
//             }

//           }
//           setOptions(chartOptions)
//     }, [])