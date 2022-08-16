import React,{useState,useEffect} from 'react';
import './App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import { Doughnut} from 'react-chartjs-2';

ChartJs.register(Tooltip, Title, ArcElement, Legend);

export const Status = () => {
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
            if (!obj[i.SRA_STATUS]) {
              obj[i.SRA_STATUS] = 1;
              
            } else if (obj[i.SRA_STATUS]) {
              obj[i.SRA_STATUS] += 1;
            }
          }

        Object.entries(obj).map(([key, value]) => {
          //console.log(`${key}`+':'+`${value}`)
          label.push(`${key}`);
          data.push(`${value}`);
        })

        setTenData({
            datasets: [{
                label:'Statuswise data',
                data:data,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(154, 205, 50, 0.9)',
                    'rgba(255, 20, 147, 0.9)', 
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                ],
            },
          ],
          labels:label, 
          })

      }).catch(e => {
        console.log("error", e)
      })
    }
    getData();
  },[])
  return (
      <Doughnut data={tenData} width={350} height={350}/>
  );
}
