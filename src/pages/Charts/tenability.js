import React,{useState,useEffect} from 'react';
import './App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar} from 'react-chartjs-2';

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const options = {
  responsive: true,
  scales: {
      x: {
      stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: true,
        title: {
            display: true,
            text: 'Tenability Count'
        }
      },
  },
  
};

export const Tenability = () => {
    const [tenData, setTenData] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
              'rgba(255, 99, 132, 0.4)',
            ]
        },
      ],
      labels:['Red'], 
      });
  useEffect(()=>{
    const getData = () =>{
      fetch('./data.json'
        , {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then((data) => {
        const res = data.json();
        return res;
      }).then((res) => {
        const label = [];
        const data = [];
        var obj = {};
        for(var i of res) {
          if (!obj[i.WARD_2017]) {
            obj[i.WARD_2017] = [];
            obj[i.WARD_2017][0] = 0;
            obj[i.WARD_2017][1] = 0;
            obj[i.WARD_2017][2] = 0;
            obj[i.WARD_2017][3] = 0;
              
          }
          if (i.TENEBILITY === "TENABLE") {obj[i.WARD_2017][0] += 1;}
          else if (i.TENEBILITY  === "UNTENABLE") {obj[i.WARD_2017][1] += 1; }
          else if (i.TENEBILITY  === "COMPLETED"){ obj[i.WARD_2017][2] += 1; }
          else if (i.TENEBILITY  === "REMOVED"){ obj[i.WARD_2017][3] += 1;}
        }
        const l = [];
        const ten = [];
        const unten = [];
        const comp = [];
        const rem = []; 
        Object.entries(obj).map((value) => {
          l.push(`${value[0]}`);
          ten.push(`${value[1][0]}`);
          unten.push(`${value[1][1]}`);
          comp.push(`${value[1][2]}`);
          rem.push(`${value[1][2]}`);
        });

        setTenData({
          datasets: [
            {
              label: "TENABLE",
              backgroundColor: "rgba(255, 99, 132, 0.9)",
              borderColor: "rgba(255, 99, 132, 0.9)",
              data: ten,
            },
            {
              label: "UNTENABLE",
              backgroundColor: "rgba(255, 206, 86, 0.9)",
              borderColor: "rgba(255, 206, 86, 0.9)",
              data: unten,
            },
            {
              label: "COMPLETED",
              backgroundColor: "rgba(153, 102, 255, 0.9)",
              borderColor: "rgba(153, 102, 255, 0.9)",
              data: comp,
            },
            {
              label: "REMOVED",
              backgroundColor: 'rgba(75, 192, 192, 0.9)',
              borderColor: 'rgba(75, 192, 192, 0.9)',
              data: rem,
            },
          ],
          labels:l, 
          })

      }).catch(e => {
        console.log("error", e)
      })
    }
    getData();
  },[])
  return (
      <Bar data={tenData} options={options}/>
  );
}

