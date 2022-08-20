import NewsCarousel from "./NewsCarousel.js";

import React ,{useContext,useEffect} from "react";
import Visualize from "./visualization.js";
import AuthContext from "../context/AuthContext.js";
// import Map from "./kepler/maps";


function LandingPage() {
  const {loggedIn,getLoggedIn} = useContext(AuthContext)
  useEffect (()=>{
    const getStatus = async () => {
      await getLoggedIn();
    }
    getStatus();
    console.log(loggedIn);
  },[loggedIn,getLoggedIn])
  return (
    <>
      <div className="home">
      <NewsCarousel />
      <Visualize/>
      </div>
    </>
  );
}

export default LandingPage;
