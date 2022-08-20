import NewsCarousel from "./NewsCarousel.js";
import React ,{useContext,useEffect} from "react";

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
  },[loggedIn])
  return (
    <>
      <div className="home">
      <NewsCarousel />
      
      </div>
    </>
  );
}

export default LandingPage;
