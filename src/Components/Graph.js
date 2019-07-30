import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
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
            labels: ['','','','','','','','',''],
            datasets: [{
                label: '',
                data: [9,7,8,5,9,8,7,10,9],
                backgroundColor:'rgb(17,3,89)'
              }]
          }
          setData(chartData);

          const chartOptions = {
            scales: {
                xAxes: [{
                    barPercentage: .5,
                    gridLines: {
                        offsetGridLines: true
                    }
                }],

                yAxes: [{
                    ticks: {
                        min: 0,
                        //suggestedMax: 100
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
                <Bar data={data} options={options}/>
            </GraphWrapper>
        </div>
    )
}