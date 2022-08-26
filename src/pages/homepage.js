import NewsCarousel from "./NewsCarousel.js";
import React ,{useContext,useEffect} from "react";
import Marquee from "react-fast-marquee";
import AuthContext from "../context/AuthContext.js";
// import Map from "./kepler/maps";
import logo from '../images/samar_logo.png';
import {Grid} from '@material-ui/core';
import FaqsAndPolicies from "./faqs_and_policies.js";
import InfoCard from "../components/infoCard.js";

function LandingPage() {

  const hospitals = [
    {name:"Freedom Fighter Gangaram Karne Hospital", address:"hermes heritage phase 2, shastri nagar, yerwada, pune, maharashtra, 411006",contact:"9723162832"},
    {name:"Bharat Ratna Late Rajeev Gandhi Hospital", address:"Deccan College Rd, Nawanagar, Salwe Nagar, Yerawada, Pune, Maharashtra 411006",contact:"9278336187"},
    {name:"Ritu Anand Hospital", address:"191, Airport Rd, Nagpur Chal, Yerawada, Pune, Maharashtra 411006",contact:"02060203728"},
    {name:"Siddharth Hospital", address:"HV6V+79W, Pune, Nagpur Chal, Yerawada, Pune, Maharashtra 411006",contact:"02063678768"},
    {name:"Kedarnath General Hospital", address:"Ganga Complex, Airport Rd, Akash Nagar, Kasturba Housing Society, Yerawada, Pune, Maharashtra 411006",contact:"02026695402"},
  ];

  const medicals = [
    {name:"Bharat Medicals", address:"Nagpur Chal, Yerawada, Pune, Maharashtra 411006",contact:"9278336187"},
    {name:"Shree Sai Medical", address:"Shop No. 6, S.No. 120/B2, Ram Group, Hsg., Society, Yerawada, Maharashtra 411006",contact:"9568336343"},
    {name:"Poona Medical", address:"Survey No. 10, Kamraj Nagar Rd, Yerwada Village, Yerawada, Pune, Maharashtra 411014",contact:"9346736187"},
    {name:"Gupta Medical", address:"HV6R+JXP, Jail Rd, Nagpur Chal, Yerawada, Pune, Maharashtra 411006",contact:"9946736187"},
    {name:"Venus Medico", address:"Ram Housing Soc, B-18 Bhagirathi, Shop No 27 Soc, opp. Harigaga, RTO Phle Nagar, Yerawada, Pune, Maharashtra 411006",contact:"9665794809"},
  ];

  const schools = [
    {name:"VIBGYOR High School", address:"Amenity Building Commerzone, Survey No. 144 &, 145, Samrat Ashok Path, off Airport Road, Yerawada, Pune, Maharashtra 411006",contact:"020 6748 8600"},
    {name:"Bharat Ratna Late Rajeev Gandhi Hospital", address:"Deccan College Rd, Nawanagar, Salwe Nagar, Yerawada, Pune, Maharashtra 411006",contact:"020 2668 6527"},
    {name:"Agrasen High School", address:"HV4J+CWF, Yerawada, Pune, Maharashtra 411006",contact:"020 2668 4256"},
    {name:"Shree Atma Vallabh High School", address:"Porwal Park, Serial No.107, Tank Rd, Near Mental Corner, Vishrantwadi, Pune, Maharashtra 411006",contact:"020 2661 3930"},
    {name:"Rosary School", address:"S.No. 162, Plot No. 1, Lane No. 2, Yerawada Gaon, Adarsh Colony, Tingre Nagar, Pune, Maharashtra 411015",contact:"020 3260 6689"},
  ];

  const {loggedIn,getLoggedIn} = useContext(AuthContext)
  useEffect (()=>{
    const getStatus = async () => {
      await getLoggedIn();
    }
    getStatus();
    console.log(loggedIn);
  },[loggedIn])
  return (
    <div className="home" margin={"auto"}>
      <Marquee
        style={{
          height: "5vh",
          color: "white",
          backgroundColor: "#eb6071",
          marginTop: "9vh",
        }}
        gradient={false}
      >
        Want to upgrade your status and have a good quality of life?
        <a
          href="https://forms.gle/FL1suA7EMNfJaE3Z7"
          style={{ color: "black", marginLeft: "0.5vw" }}
          target="_blank"
        >
          {" "}
          Click Here
        </a>
      </Marquee>
      <NewsCarousel />
      <br />
      <div style={{ paddingLeft: "3vw", fontSize: "25px", fontWeight: "500" }}>
        About SAMAR
      </div>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item md={3} justifyContent={"space-evenly"} marginLeft={"5vw"}>
          <img
            src={logo}
            style={{ width: "15vw", alignContent: "center", marginLeft: "2vw" }}
          />
        </Grid>
        <Grid item md={8} className="text-sm">
          <div
            padding={"2vw"}
            style={{ verticalAlign: "center", marginTop: "6vh" }}
          >
            <p>
              Slum Administration, Management and rehabilitation is a platform
              which aims in providing generalized workflow in order to uplift
              and upgrade the way of living of slum dwellers.
            </p>
            <p>
              Currently, there isn’t any system that links the slum inhabitants
              and govt together. With SAMAR, we are trying to eradicate that gap
              present. With this platform, the user can have an overview of all
              the government schemes, fill grievances and essential facilities.
              On the other hand, the government officials can have a brief look
              into each and every slum in order to monitor, control and avoid
              the growth of slums in future. The developers can also register
              themselves and have a look into their project.
            </p>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <div className="grid-sm" style={{ paddingLeft: "3vw", fontSize: "25px", fontWeight: "500" }}>
        Facilities around me
      </div>
      <br />
      <Grid container justifyContent={"space-evenly"} className="grid-sm">
        <Grid className="grid-sm" item justifyContent={"space-evenly"}>
          <h6>Hospitals</h6>
          {hospitals.map((e) => (
            <InfoCard data={e} />
          ))}
        </Grid>
        <Grid item justifyContent={"space-evenly"}>
          <h6>Medicals</h6>
          {medicals.map((e) => (
            <InfoCard data={e} />
          ))}
        </Grid>
        <Grid item justifyContent={"space-evenly"}>
          <h6>Schools</h6>
          {schools.map((e) => (
            <InfoCard data={e} />
          ))}
        </Grid>
      </Grid>
      <br />
      <div style={{ paddingLeft: "3vw", fontSize: "25px", fontWeight: "500" }}>
        FAQs and policies
      </div>

      <FaqsAndPolicies />
    </div>
  );
}

export default LandingPage;
