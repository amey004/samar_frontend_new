import NewsCarousel from "./NewsCarousel.js";
import React ,{useContext,useEffect} from "react";

import AuthContext from "../context/AuthContext.js";
// import Map from "./kepler/maps";
import FaqsAndPolicies from "./faqs_and_policies.js";

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
        <FaqsAndPolicies/>
      </div>
    </>
  );
}

export default LandingPage;
