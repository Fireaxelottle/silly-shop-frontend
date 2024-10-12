import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
  } from "chart.js";

  import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
  );

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const  BarChart = ({ data_1, data_2 , title_1 , title_2 , bgColor_1 , bgColor_2 , horizontal}) => {


    const options = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
    };

    const data = {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bgColor_1,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bgColor_2,
            barThickness: "flex",
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
        ],
      };
    
    return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;

};


export default BarChart;
