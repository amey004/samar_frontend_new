import React from "react";
import ProjectItem from "./projectItem";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi';
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <div disabled={isFirstItemVisible} onClick={() => scrollPrev()} style={{alignSelf:"center"}}>
       <HiArrowLeft style={{
            color:"white",
        }}/>
      </div>
    );
  }
  
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <div disabled={isLastItemVisible} onClick={() => scrollNext()} style={{alignSelf:"center"}}>
        <HiArrowRight style={{
            color:"white",
        }}/>
      </div>
    );
}


function CarouselCard(props){
    // console.log(props.projectDetails);
    return (
        <div style={{
            margin:"2vh",
            backgroundColor:"#4bcece",
            borderRadius:"10px",
            padding:"5px",
            overflow:"hidden"
            
        }}>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{
            alignContent:"center",
            overflow:"scroll",
            }}>
            {props.projectDetails.map((e) => (
                <ProjectItem data = {e}/>
            ))}
            </ScrollMenu>
        </div>                
    );
}

export default CarouselCard;