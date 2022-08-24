import React, { useEffect, useState } from "react";
import { Box ,Button, Grid} from "@material-ui/core";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import { Household } from "./Charts/household";
import { Status } from "./Charts/status";
import { Tenability } from "./Charts/tenability";
import { Wardcount } from "./Charts/wardwisecount";

function ViewReport(){
    
    const createPDF = async () => {
    const pdf = new jsPDF("portrait", "px", "a4");
    // const data = await html2canvas(document.querySelector("#template"));
    var pages = document.getElementsByClassName("page");
    console.log(pages.length);
    for(var i=0;i<pages.length;i++){
        const data = await html2canvas(pages[i]);
        const img = data.toDataURL("image/png");  
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        // const pdfHeight = pdf.internal.pageSize.getHeight();
        // pdf.context2d.pageWrapYEnabled = true;
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        if(i!=pages.length-1){
            pdf.addPage();
        }
        
    }
    
    pdf.save("sample.pdf");
    };
    
       
    return (
        <div style={{marginTop:"10vh"}}>
            
            <ReportTemplate/>
            <Box style={{marginLeft:'80vw'}}>
                <Button onClick={createPDF}>Download PDF Report</Button> 
            </Box>
        </div>
    );
}

const colors = {
    pinkDark:"#eb6071",
    pink:"#f1747d",
    blueLight:"#75aaae",
    blueDark:"#52777a",
    blue:"#478e93",
    pinkLight:"#f7b5b9",
    white:"#EEF0F2",
    blueThemeDark:"#197278",
};

const styles = {
    largeHeading:{
        fontSize:"40px",
        textAlign:"start",
    },
};


var wardNames = [];
const fetchData = () => {
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
    for(var i of res){
        // console.log(i);
        if(!wardNames.includes(i.WARD_2017)){
            wardNames.push(i.WARD_2017);
        }
    }
    console.log(wardNames);
  }).catch(e => {
    console.log("error", e)
  })
}

const GetData = (props) =>{
    // var wards = {};
    // // var wardNames = [];
    // var slums = [];
    // var analysis = {};
    const [wards,setWards] = useState({});
    const [slums,setSlums] = useState([]);
    const [analysis,setAnalysis] = useState({
        households:0,
        population:0,
        areaOccupied:0.0,
        totalDensity:0.0,
        avgDensity:0.0,
    });
  function filterWard(wardName){
    return wardName.WARD_2017 === props.ward;
  }
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
        console.log(props.ward)
        
        if(props.ward === "ALL" || props.ward === ""){
            for(var i of res) {
                slums.push(i.SLUM_NAME);
                // console.log(i.SLUM_NAME)
                if(!isNaN(i.APPROX_HH)){
                    analysis["households"] += i.APPROX_HH;
                }
                if(!isNaN(i.POPULATION)){
                    analysis["population"] += i.POPULATION;
                }
                if(!isNaN(i['DENSITY Per HH'])){
                    analysis["totalDensity"] += i['DENSITY Per HH'];
                }
                if(!isNaN(i.AREA_SQM)){
                    analysis["areaOccupied"] += i.AREA_SQM;
                }
                if(!wards[i.WARD_2017]){
                    wards[i.WARD_2017] = [];
                    wards[i.WARD_2017].push(i);
                }
                else{
                    wards[i.WARD_2017].push(i);
                }
              }
              console.log(slums.length);
              setAnalysis(analysis);
        }
        else{
            const filteredRes = res.filter(filterWard);
            for(var i of filteredRes) {
                slums.push(i.SLUM_NAME);
                if(!isNaN(i.APPROX_HH)){
                    analysis["households"] += i.APPROX_HH;
                }
                if(!isNaN(i.POPULATION)){
                    analysis["population"] += i.POPULATION;
                }
                if(!isNaN(i['DENSITY Per HH'])){
                    analysis["totalDensity"] += i['DENSITY Per HH'];
                }
                if(!isNaN(i.AREA_SQM)){
                    analysis["areaOccupied"] += i.AREA_SQM;
                }
                if(!wards[i.WARD_2017]){
                    wards[i.WARD_2017] = [];
                    wards[i.WARD_2017].push(i);
                }
                else{
                    wards[i.WARD_2017].push(i);
                }
                // if(!wardNames.includes(i.WARD_2017)){
                //     wardNames.push(i.WARD_2017);
                // }
                
              }
        }
      
      analysis.avgDensity = (analysis.totalDensity)/(wardNames.length);
    //   console.log(wards);

    }).catch(e => {
      console.log("error", e)
    })
    useEffect(()=>{},[analysis,slums,wards]);
    return (
        <Grid container>
            <Grid item md={6}>
                <Box style={{backgroundColor:colors.pinkLight, padding:"10px", border:"1px solid #f1747d"}}>
                    <div padding={"2vh"}>Report analysis of</div>
                    <div  padding={"2vh"} height={"20vh"} width={"30vh"} style={styles.largeHeading}>
                        {props.ward === "ALL" ? "PMC DATA 2017": props.ward}</div>
                        {props.ward === "ALL" ? <div><br/><br/></div> : <div/>}
                </Box> 
                </Grid>
            <Grid item md={6}>
                    <Box style={{backgroundColor:colors.blueLight, padding:"10px", border:"1px solid #478e93"}}>
                        <div>Total count of slums</div>
                        <div height={"20vh"} width={"30vh"} style={styles.largeHeading}>{slums.length ?? 0}</div>
                        <br/>
                        <br/>
                    </Box>
            </Grid>
            <Grid item md={6}>
            <Box style={{
                    justifyContent:"center",
                    backgroundColor:colors.blueDark,
                    color:colors.white,
                    
                    padding:"10px"
                }}>
                <div>Total No of Households</div>
                <div>{analysis.households ?? 0}</div>
                <br/>
                <div>Total Slum Population</div>
                <div>{analysis.population ?? 0}</div>
                <br/>
                {
                        props.ward === "ALL"
                        ?<div>
                            <div>Total No of Wards</div>
                            <div>{wardNames.length ?? 0}</div>
                        </div>
                        : <div></div>
                    }
                
                
                </Box>
                
            </Grid>
            <Grid item md={6}>
            <Box style={{
                    justifyContent:"center",
                    backgroundColor:colors.blueDark,
                    color:colors.white,
                    
                    padding:"10px"
                }}>
                <div>Total Area Occupied</div>
                <div>{Math.round(analysis.areaOccupied)??0} sq m</div> 
                <br/>
                <div>Average Density of Population</div>
                <div>{Math.round(analysis.avgDensity) ?? 0}</div>
                <br/>
                {
                    props.ward === "ALL"
                    ?<div><br/><br/></div>
                    :<div></div>
                }
                
                </Box>
                
            </Grid>
        </Grid>
    );
  };

function WardPage(props){
    var ward = props.ward;
    return (
        <Box style={{
            backgroundColor:colors.white,
            // marginLeft:"2vh",
            // marginRight:"2vh",
            height:"1123px",
            width:"794px"
        }} className="page">
            <Grid container justifyContent={"space-evenly"}>
            <GetData ward={props.ward}></GetData>
            
            <Grid item md={6}>
                <Box style={{
                    padding:"10px",
                    height: "50%",
                }}>
                <Household ward={props.ward}/>
                </Box>
            </Grid>
            <Grid item md={6}>
            <Box style={{
                    padding:"10px",
                    height: "50%",
                }}>
                <Tenability ward={ward}/>
                </Box>
            </Grid>
            <Grid item md={6}>
            <Box style={{
                    padding:"10px",
                    height: "50%",
                    // width:"120%",
                }}>
                <Wardcount ward={ward}/>
                </Box>
            </Grid>
            <Grid item md={6}>
            <Box style={{
                    padding:"10px",
                    height: "50%",
                    // width:"120%",
                }}>
                <Status ward={ward}/>
                </Box>
            </Grid>
        </Grid>
        </Box>
    );
}

function ReportTemplate(){
    useEffect(() => {},[wardNames]);
    fetchData();
    return(
        <div id="template" style={{marginTop:"15vh"}}>
            <WardPage ward={"ALL"}></WardPage>
            {wardNames.map((ward) => (
                <WardPage ward={ward}></WardPage>
            ))}
        </div>
    );
}

export default ViewReport;