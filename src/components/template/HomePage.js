import React from "react";
import SliderBanner from "../module/SliderBanner";
import Mainproduct from "../module/Mainproduct";
import coffeedata from "../../../data/coffeedata";
import MainVideo from "../module/MainVideo";


function HomePage({ products }) {

  return (
    <div>
      <div>
        <SliderBanner />
      </div>
      <div>
        <Mainproduct products={coffeedata} />
      </div>
      <div><MainVideo/></div>
    </div>
  );
}

export default HomePage;
