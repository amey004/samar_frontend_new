import React from "react";
import ProjectItem from "./projectItem";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
import "../index.css";
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()} style={{alignSelf:"center"}}>
       <HiArrowLeft style={{
            color:"#125054",
        }}/>
      </div>
    );
  }
  
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <div disabled={isLastItemVisible} onClick={() => scrollNext()} style={{alignSelf:"center"}}>
        <HiArrowRight style={{
            color:"#125054",
        }}/>
      </div>
    );
}


function CarouselCard(props){
    // console.log(props.projectDetails);
    return (
        <div style={{
            margin:"2vh",
            backgroundColor:"#d1e3e4",
            width:"90%",
            borderRadius:"10px",
            padding:"5px",
            overflow:"hidden"
            
        }}>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{
            alignContent:"center",
            overflow:"scroll",
            }}>
            {props.projectDetails.map((e,key) => (
                <ProjectItem data = {e} key={key} style={{}}/>
            ))}
            </ScrollMenu>
        </div>                
    );
}

export default CarouselCard;