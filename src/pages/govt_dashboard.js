
import React,{useEffect,useContext, useState} from 'react';
import  slum from '../images/slum1.jpg';
import CarouselCard from '../components/carouselCard.js';
import { Grid, Button , Select, MenuItem,Card,CardContent,Typography,Box} from '@material-ui/core';
import { Link } from "react-router-dom";
import Notices from '../components/noticesCard';
import FileUpload from '../components/fileUpload';
import Visualize from "./visualization.js";
import AuthContext from '../context/AuthContext';
import "./App.css"
import axios from 'axios';
import MapBox from '../components/mapbox';
import ReactScoreIndicator from 'react-score-indicator';

const GovernmentDashboard = () => {

    const {role} = useContext(AuthContext);
    const [ward,setWard] = useState("");
    const [wards, setWards] = useState(["ALL"]);
    const [ssiward,setssiward] = useState();
    const [ssislums,setssislums] = useState([]);
    const [ssislum,setssislum] = useState("");
    const [visibility,setvisibility] = useState(false);
    const [currentProjects1,setcurrentprojects] = useState();
    const [pastProjects1,setpastprojects] = useState();
    const [index,setindex] = useState();

    // console.log(role)
    var currentProjects = [
        {projectId:1,projectName:'Dhankawadi Towers',image:slum},
        {projectId:2,projectName:'Sahakarnagar Heights',image:slum},
        {projectId:3,projectName:'Sai Krupa CHS',image:slum},
        {projectId:4,projectName:'Kumar Heights',image:slum},
        {projectId:5,projectName:'Aundh Housing',image:slum},
        {projectId:6,projectName:'Sai Towers',image:slum},
        {projectId:7,projectName:'Dhankawadi Towers',image:slum},
        {projectId:8,projectName:'Dhankawadi Towers',image:slum},
        {projectId:9,projectName:'Dhankawadi Towers',image:slum}
    ];

    var pastProjects = [
        {projectId:1,projectName:'Sri Ganesh CHS',image:slum},
        {projectId:2,projectName:'Sai Vishwa',image:slum},
        {projectId:3,projectName:'Hanuman Mandir CHS',image:slum},
        {projectId:4,projectName:'Dhankawadi CHS',image:slum},
        {projectId:5,projectName:'Dhankawadi Towers',image:slum},
        {projectId:6,projectName:'Dhankawadi Towers',image:slum},
        {projectId:7,projectName:'Dhankawadi Towers',image:slum},
        {projectId:8,projectName:'Dhankawadi Towers',image:slum},
        {projectId:9,projectName:'Dhankawadi Towers',image:slum}
    ];

    var upcomingProjects = [
        {projectId:1,projectName:'Sri Ganesh CHS',image:slum},
        {projectId:2,projectName:'Sai Vishwa',image:slum},
        {projectId:3,projectName:'Hanuman Mandir CHS',image:slum},
        {projectId:4,projectName:'Dhankawadi CHS',image:slum},
        {projectId:5,projectName:'Dhankawadi Towers',image:slum},
        {projectId:6,projectName:'Dhankawadi Towers',image:slum},
        {projectId:7,projectName:'Dhankawadi Towers',image:slum},
        {projectId:8,projectName:'Dhankawadi Towers',image:slum},
        {projectId:9,projectName:'Dhankawadi Towers',image:slum}
    ];

    var noticesList = [
        {noticeId:1, recipient:"Sevak Vijayabhas",subject:"Illegal Renting of flat allotted 2 years back",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:2, recipient:"Hanuman Sundaramoorthy",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:3, recipient:"Bhrij Shreekant",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:4, recipient:"Ranajit Prithu",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:5, recipient:"Aslam Mahadev Salil",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        {noticeId:6, recipient:"Bankebihari Samrat Yashodhar",subject:"Illegal Renting",address:"Flat 5, Sai Vishwa, Dhankawadi, Pune", allottedOn:"03/08/2021",verificationDate:"01/07/2022"},
        // {noticeId:7, recipient:"Baburao",subject:"Illegal Renting"},
        // {noticeId:8, recipient:"Baburao",subject:"Illegal Renting"},
    ];
    
    const handleChange = (event) => {
      setWard(event.target.value);
      // console.log(ward);
    };

    var ssislums1 = [
      {slum_name:"",slum_code:""},
      { slum_name: "DEVKAR VASTI RAMWADI YERAWADA", slum_code: "1201010501" },
      { slum_name: "RAMABAI AMBEDKAR NAGAR", slum_code: "1201020104" },
      { slum_name: "CHAVAN CHAWL KALAS", slum_code: "1201020103" },
      { slum_name: "SRAMIK VASAHAT YERAWADA", slum_code: "1201020215" },
      { slum_name: "PANMALA TADIWALA ROAD",slum_code:"1201032011"}
    ];
    
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
        for(var i of res) {
            if (!wards.includes(i.WARD_2017)) {
              setWards([...wards, i.WARD_2017]);
            }
          }
          console.log(wards);

      }).catch(e => {
        console.log("error", e)
      })
    };
    getData();
    const getProjects = async () => {
      const data1 = await axios.get(
        "https://samarserver.herokuapp.com/filterdata?table=projects&key=status&value=ongoing"
      );
      const data2 = await axios.get(
        "https://samarserver.herokuapp.com/filterdata?table=projects&key=status&value=completed"
      );
      // console.log(data2.data.data)
      return {'ongoing':data1.data.data,'completed':data2.data.data}
    };
    // const temp = getProjects().then((data) => {
    //   console.log(data);
    //   return data;
    // });
    // setcurrentprojects(temp.ongoing);
    // setpastprojects(temp.completed);

    // useEffect(() => {
      
    // },[]);
    const handleWardChange = async (e) => {
      setssiward(e.target.value);
      const data = await axios.get(
        `https://samarserver.herokuapp.com/slumfilterdata?key=ward&value=${e.target.value}`
      );
      console.log(data.data);
      setssislums(data.data.data)
      
    }
    const handleClick = async (e) => {
        console.log("Clicked!")
        
        const temp = await axios.get(
          `https://samarserver.herokuapp.com/filterdata?table=ssi&key=slum_id&value=${ssislum}`
        );
        setvisibility(true);
        console.log(temp);
        setindex(temp.data.data[0]);
        console.log(index);
    }

    useEffect(()=>{
      setpastprojects()
    },[ssiward,ssislums,ssislum,visibility,index])
    return (
      <div className="govtdash" style={{ marginTop: "12vh" }}>
        <Grid container justifyContent={"space-evenly"}>
          <Grid item xs={12} md={11} className="map-sm">
            <MapBox />
          </Grid>
          <h1
            style={{
              fontWeight: "500",
              marginTop: "6vh",
              marginBottom: "1vh",
            }}
            className="heading-stat"
          >
            Slum Index
          </h1>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"space-evenly"}
              style={{ marginTop: "30px", marginBottom: "50px" }}
            >
              <Grid
                item
                xs={12}
                md={4}
                alignItems="center"
                justifyContent="center"
                style={{ marginLeft: "auto", marginRight: "auto" }}
                className="sm-drop"
              >
                <label id="demo-simple-select-label">Ward: </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ssiward}
                  onChange={handleWardChange}
                  label="wards"
                  style={{
                    minWidth: "100px",
                    maxWidth: "200px",
                  }}
                  autoWidth={true}
                >
                  {wards.map((e) => (
                    <MenuItem value={e} key={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={4} className="sm-drop">
                <label id="demo-simple-select-label">Slum: </label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(e) => {
                    setssislum(e.target.value);
                  }}
                  value={ssislum}
                  label="slums"
                  style={{
                    minWidth: "100px",
                    marginLeft: "auto",
                    maxWidth: "200px",
                  }}
                  autoWidth={true}
                >
                  {ssislums.map((e) => (
                    <MenuItem value={e.id} key={e.slum_name}>
                      {e.slum_name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                xs={12}
                justifyContent="center"
                alignItems="center"
                className="sm-button"
              >
                <div>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    style={{
                      backgroundColor: "#197278",
                      color: "white",
                      justifyItems: "center",
                      marginLeft: "47%",
                      marginTop: "3%",
                      marginBottom: "50px",
                    }}
                  >
                    Calculate
                  </Button>
                </div>
              </Grid>
              {visibility && (
                <>
                  <ReactScoreIndicator
                    value={3.35}
                    maxValue={10}
                    lineWidth={10}
                    stepsColors={[
                      "#3da940",
                      "#3da940",
                      "#3da940",
                      "#84c42b",
                      "#f1bc00",
                      "#ed8d00",
                      "#d12000",
                      "#53b83a",
                    ]}
                    style={{ maringTop: "30px" }}
                  />
                  <Box
                    position={"center"}
                    sx={{ flexGrow: 1 }}
                    style={{ margin: "90px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid md={3} xs={6} item spacing={1}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Living Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >
                              {0.42}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Housing Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >
                              {0.82}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Water Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{0.52}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Sanitation Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{0.48}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Fuel Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{-0.14}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Energy Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{0.5}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Literacy Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{0.14}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid md={3} xs={6} item spacing={4}>
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Employment Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{-0.22}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid
                        md={3}
                        xs={12}
                        item
                        spacing={4}
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      >
                        <Card>
                          <CardContent>
                            <Typography
                              variant="h5"
                              style={{ textAlign: "center" }}
                            >
                              Ration Index
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ textAlign: "center" }}
                            >{0.82}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{ marginLeft: "auto" }}
            className="heading-stat"
          >
            <h1
              className="heading-stat"
              style={{
                fontWeight: "500",
                marginTop: "1vh",
                marginBottom: "1vh",
              }}
            >
              Statistics
            </h1>
            <label style={{ marginRight: "20px" }}>Select ward: </label>
            <Select
              placeholder="Select a ward"
              value={ward}
              label={"Select Ward"}
              onChange={handleChange}
              style={{
                backgroundColor: "#FFFFFF",
                minWidth: "100px",
                color: "#197278",
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
              autoWidth={true}
            >
              {wards.map((e) => (
                <MenuItem value={e} key={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item md={5} sm={12}>
            <Link to="/detailed-report" style={{ textDecoration: "none" }}>
              <Button
                className="button-detail"
                style={{
                  backgroundColor: "#197278",
                  color: "#FFFFFF",
                  marginTop: "2vh",
                  marginLeft: "16vw",
                  marginBottom: "2vh",
                }}
              >
                <div>View Detailed Report</div>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={11}>
            <Visualize ward={ward} />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item md={5} className="carousel">
            <div
              style={{ fontWeight: "500", marginTop: "1vh" }}
              className="sm-head"
            >
              Current Projects
            </div>
            <CarouselCard
              projectDetails={currentProjects}
              // detail={currentProjects1}
            />
          </Grid>
          <Grid item md={5} className="carousel">
            <div
              style={{ fontWeight: "500", marginTop: "1vh" }}
              className="sm-head"
            >
              Past Projects
            </div>
            <CarouselCard projectDetails={pastProjects} />
          </Grid>
          <Grid item md={5} className="carousel">
            <div
              style={{ fontWeight: "500", marginTop: "1vh" }}
              className="sm-head"
            >
              Upcoming Projects
            </div>
            <CarouselCard projectDetails={upcomingProjects} />
          </Grid>
          <Grid item md={5} className="carousel">
            <div
              style={{ fontWeight: "500", marginTop: "1vh" }}
              className="sm-head"
            >
              Notices
            </div>
            <Notices notices={noticesList} />
          </Grid>
          <Grid item md={8}>
            <div
              style={{
                fontWeight: "500",
                marginTop: "1vh",
                marginLeft: "4vw",
                marginBottom: "1vh",
              }}
            >
              Add More Data
            </div>
          </Grid>
          <Grid item md={3}>
            <Link
              to="/documents/UploadDataSample.xlsx"
              target={"_blank"}
              download
            >
              <div
                style={{
                  marginTop: "1vh",
                  marginLeft: "4vw",
                  marginBottom: "1vh",
                }}
              >
                Download Sample Template
              </div>
            </Link>
          </Grid>
        </Grid>

        <FileUpload />
      </div>
    );
}

export default GovernmentDashboard;