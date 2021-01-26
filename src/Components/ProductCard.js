import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";
const ProductCard = ({ x }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products);
  const [add, setAdd] = useState(false);
  const handleAddToCart = () => {
    setAdd(true);
    dispatch(addToCart(x.id));
  };
  useEffect(() => {
    cart.find((y) => {
      if (y.id === x.id) {
        setAdd(true);
      }
    });
  }, [cart]);
  return (
    <div className="card d-flex justify-content-center mx-5">
      <img src={x.img} className="card-img-top" alt={x.name}></img>
      <div className="card-body">
        <h5 className="card-title">{x.pro_name}</h5>
        <h3 className="card-text">${x.price}</h3>
        {!add ? (
          <Link onClick={handleAddToCart} className="btn btn-primary">
            Buy Now
          </Link>
        ) : (
          <button className="btn btn-secondary" disabled>
            Item Added
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
