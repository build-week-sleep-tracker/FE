import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import styled from "styled-components";
import sleepData from "../sleepData"

const GraphWrapper = styled.div`
    width: 100vw;
    background-color: rgb(229,225,248);
    padding: 0;
    margin: 0;
`
const GraphTitle = styled.div`
    display: flex;
    background-color: rgb(229,225,248);
`

export default function GraphCanvas() {
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const sleepHours = sleepData.sleepHours

    useEffect(() => {
        const chartData = {
            labels: ['', '', '', '', '', '', '', '', ''],
            datasets: [{
                label: '',
                data: [5, 4, 3, 2, 1, 2, 3, 4, 5],
                backgroundColor: 'rgb(17,3,89)'
            }]
        }
        setData(chartData);

        const chartOptions = {
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
                        callback: function (label) {
                            switch (label) {
                                case 0:
                                    return '';
                                case 1:
                                    return '';
                                case 2:
                                    return 'Two';
                                case 3:
                                    return '';
                                case 4:
                                    return 'Four';
                                case 5:
                                    return '';
                                case 6:
                                    return 'Six';
                                case 7:
                                    return '';
                                case 8:
                                    return 'Eight';
                                case 9:
                                    return '';
                                case 10:
                                    return 'Ten';
                            }
                        }
                    }
                }],
            }

        }
        setOptions(chartOptions)
    }, [])

    return (
        <div>
            <GraphTitle>
                <h2>Hours Slept</h2>
                <h4>7/5 - 7/15</h4>
            </GraphTitle>
            <GraphWrapper>
                <Bar data={data} options={options} />
            </GraphWrapper>
        </div>
    )
}

