import React from "react";
import Lottie from "react-lottie";
import error from '../lottieFiles/error_not_found';

function ErrorPage(){

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:error,
        // here is where we will declare lottie animation
        // "animation" is what we imported before animationData: animation,
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        },
     };
    
    return (
        <div>
        <Lottie options={defaultOptions} style={{
            marginTop:"15vw",
            height:"20vw",
            width:"25vw"
        }} />
        </div>
    );
}

export default ErrorPage;