import React,{useState,useEffect} from 'react';
import '../App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
/*
function dynamicColors() {
  var r = Math.floor(Math.random() * 150);
  var g = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + 255 + ", 0.9)";
}

var randomColorGenerator = function (a) { 
  var pool = [];
  for(var i = 0; i < a; i++) {
      pool.push(dynamicColors());
  }
  return pool; 
};
*/
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const options = {
  responsive: true,
  plugins: {
    colorschemes: {
        scheme: 'office/Aspect6'
    },
  },
  scales: {
    x: {
      display: false,
            
    },
      y: {
        display: true,
        title: {
            display: true,
            text: 'No. of Households'
        }
      },
  },
};

export const Household = (props) => {
  const [hhdata, setHhdata] = useState({
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
        // console.log(props.ward);
        if(props.ward === "ALL" || props.ward === ""){
          for (var i of res) {
            if (!obj[i.WARD_2017]) {
              obj[i.WARD_2017] = parseFloat(i.APPROX_HH);
            }
            else if (obj[i.WARD_2017]) {
              obj[i.WARD_2017] += parseFloat(i.APPROX_HH);
            }
          }
        }
        else{
          for (var i of res) {
            if(props.ward === i.WARD_2017){
              if (!obj[i.SLUM_NAME]) {
                obj[i.SLUM_NAME] = parseFloat(i.APPROX_HH);
              }
              else if (obj[i.SLUM_NAME]) {
                obj[i.SLUM_NAME] += parseFloat(i.APPROX_HH);
              }
            }
            
          }
        }
        

        Object.entries(obj).map(([key, value]) => {
          //console.log(`${key}`+':'+`${value}`)
          label.push(`${key}`);
          data.push(`${value}`);
        })

      setHhdata({
        datasets: [{
            label:'Household',
            data:data,
            backgroundColor:'#478e93',
            borderColor: '#0f4448',
            borderWidth:2,
            /*[
            'rgba(25, 25, 112, 0.9)',
            'rgba(20, 20, 120, 0.9)',
            'rgba(0, 0, 120, 0.9)',
            'rgba(0, 0, 139, 0.9)',
            'rgba(0, 0, 170, 0.9)',
            'rgba(0, 0, 205, 0.9)',
            'rgba(0, 0, 255, 0.9)',
            'rgba(65, 105, 225, 0.9)',
            'rgba(75, 150, 230, 0.9)',
            'rgba(30, 144, 255, 0.9)', 
            'rgba(0, 191, 255, 0.9)',
            'rgba(0, 191, 250, 0.9)',
            'rgba(135, 206, 230, 0.9)',
            'rgba(173,216,230, 0.9)',
            'rgba(173,216,220, 0.9)',]
            */
        },
      ],
      labels:label, 
      })

      }).catch(e => {
        console.log("error", e)
      })
    }
    getData();
  },[props.ward])
  return (
    <Bar data={hhdata} width={350} height={350} options={options} />
  );
}

