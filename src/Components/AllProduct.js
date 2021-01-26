import React from "react";
import { data } from "../fakeData/fakeData";
import ProductCard from "./ProductCard";
const AllProduct = () => {
  return (
    <div className="container allProduct">
      <div className="row">
        {data.map((x) => (
          <div className="col-md-4">
            <ProductCard x={x} key={x.id}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
