import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import styled from "styled-components";

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #E5E1F8;
`

const GraphWrapper = styled.div`
    width: 90vw;
    background-color: #E5E1F8;
    margin-left: 5vw;
`
const GraphTitle = styled.div`
    text-align: center;
    justify-content: center;
    background-color: #E5E1F8;
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
            legend: {display: false},
            scales: {
                xAxes: [{
                    barPercentage: .5,
                    gridLines: {
                        offsetGridLines: true,
                        display: false,
                    }
                }],

                yAxes: [{
                    ticks: {
                        min: 0,
                        callback: function(label) {
                            switch (label) {
                                case 0:
                                    return '';
                                case 1:
                                    return '';
                                case 2:
                                    return '2';
                                case 3:
                                    return '';
                                case 4:
                                    return '4';
                                case 5:
                                    return '';
                                case 6:
                                    return '6';
                                case 7:
                                    return '';
                                case 8:
                                    return '8';
                                case 9:
                                    return '';
                                case 10:
                                    return '10';
                            }       
                        }
                    }
                }],
            }

          }
          setOptions(chartOptions)
    }, [])

    return(
        <div>
            <FlexWrapper>
                <GraphTitle>
                    <h3>Hours Slept</h3>
                    <h4>7/5 - 7/15</h4>
                </GraphTitle>
                <GraphWrapper>
                    <Bar data={data} options={options}/>
                </GraphWrapper>
            </FlexWrapper>
        </div>
    )
}

