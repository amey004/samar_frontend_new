import React,{useState,useEffect} from 'react';
import '../App.css';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const options = {
  plugins:{
    legend: {
      display: true,
      position: 'right',
    }
  }
}

export const Wardcount = (props)=>{
  var ward = props.ward;
  function filterWard(wardName){
    return wardName.WARD_2017 == ward;
  }
  const [data, setData] = useState({
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
        const data1 = [];
        var obj = {};
        if(props.ward == "ALL" || props.ward == ""){
          for (var i of res) {
            const newId = i.WARD_2017.replace(/[^a-z]/gi, ' ');
            if (!obj[newId])
              obj[newId] = 1;
            else if (obj[newId])
              obj[newId] += 1;
          }
        }
        else{
          const filteredRes = res.filter(filterWard);
          for (var i of filteredRes) {
            const newId = i.WARD_2017.replace(/[^a-z]/gi, ' ');
            if (!obj[newId])
              obj[newId] = 1;
            else if (obj[newId])
              obj[newId] += 1;
          }
        }
        
        const result = Object.fromEntries(Object.entries(obj)
          .sort(([, a], [, b]) => b - a)
          .filter((s => ([, v]) => s.add(v))(new Set))
        );
        var i = 0;
        var tempdata = 0;
        for (var key in result) {
          if (i<5) {
            label.push(key);
            data1.push(result[key])
            i++
          }
          else {
            tempdata += result[key];
          }
        }
        data1.push(tempdata)
        label.push("   OTHERS");
        /*
        Object.entries(result).map(([key, value]) => {
          label.push(`${key}`);
          data1.push(`${value}`);
        })*/

      setData({
        datasets: [{
            label:'Wardwise Slum',
            data:data1,
          backgroundColor: [
            '#eb6071',
            '#52777a',
            '#f1747d',
            '#478e93',
            '#f7b5b9',
            '#75aaae',
            
            
            
              /*
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(255, 20, 147, 0.9)', 
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)',
              'rgba(102,205,170, 0.9)',
              'rgba(255,52,179,0.9)',
              'rgba(154, 205, 50, 0.9)',
              'rgba(65, 105, 225, 0.9)',
              'rgba(218,112,214, 0.9)',
              'rgba(202,255,112, 0.9)',
              'rgba(138,46,226,0.9)',
              'rgba(255,127,0,0.9)',
              */
            ],
        },
      ],
        labels: label,
      })
      }).catch(e => {
        console.log("error", e)
      })
    }
    getData();
  },[props.ward])
  return (
    <Pie data={data} width={350} height={350} options={ options} />
  );
}
