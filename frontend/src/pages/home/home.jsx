import React from "react";
import Banner from "./banner";
import Recomended from "./recomended";
import Testimonial from "./testimonial";
import Company from "./company";

const home = () => {
  return (
    <div>
      <Banner />
      <Recomended />
      <Testimonial />
      <Company />
    </div>
  );
};

export default home;
