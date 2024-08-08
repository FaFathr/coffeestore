
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: 2,
   
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="/images/slider1.jpg"
            alt="Coffee 1"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </div>

      
        <div>
          <img
            src="/images/slider4.jpg"
            alt="Coffee 3"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/images/slider5.jpg"
            alt="Coffee 3"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/images/slider6.jpg"
            alt="Coffee 3"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </Box>
  );
}

export default SliderBanner;
