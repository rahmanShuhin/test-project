import React from "react";
import Slider from "react-slick";
import { data } from "../fakeData/fakeData";
import ProductCard from "./ProductCard";
const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="container text-center feature">
      <h2>Featurerd Products</h2>
      <Slider {...settings}>
        {data.map((x) => (
          <ProductCard x={x}></ProductCard>
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
