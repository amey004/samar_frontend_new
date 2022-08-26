import React from "react";
import temp_img from "../images/temp_img.png";
import temp_img2 from "../images/temp_img2.png";
import Carousel from "react-material-ui-carousel";
import { Box } from "@material-ui/core";
import { Container } from "reactstrap";

function NewsCarousel() {
  var items = [
    {
      image: temp_img,
      description:
        "1 in 7 people on the planet currently lives in a slum. 1 in every 4 people will live in a slum by 2030, according to current estimates. 1 in 3 urban residents live in slums in developing countries.",
    },
    {
      image: temp_img2,
      description:
        "The urban people residing in slum areas are socially, economically and physically most vulnerable than other people of the urban environment.",
    },
  ];
  return (
    <>
      <div>
        <Carousel className="carousel" navButtonsAlwaysVisible={true} indicators={false}>
          {items.map((item, i) => (
            <Box component="span">
              <Item key={i} item={item}/>
            </Box>
          ))}
        </Carousel>
      </div>
    </>
  );
}

function Item(props) {
  return (
    <div style={{position: 'relative'}}>
      <img src={props.item.image} alt="" className="carousel-img"></img>
      <div className="textbox">{props.item.description}</div>
    </div>
  );
}

export default NewsCarousel;
