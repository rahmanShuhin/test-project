import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../fakeData/fakeData";
import { addQuantity, subtractQuantity } from "./actions/actions";
const ShoppingCart = () => {
  const cart = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const arr = cart.map((x) => {
      const fake = data.find((y) => y.id === x.id);
      fake.quantity = x.quantity;
      return fake;
    });
    setProducts(arr);
  }, [cart]);
  useEffect(() => {
    let total = 0;
    products.map((x) => {
      total = total + x.price * x.quantity;
    });
    setSubTotal(total);
  }, [products]);
  console.log(products);
  return (
    <div className="container shoppingCart">
      <h2 className="text-center">1.Shopping Cart</h2>
      <div className="row">
        <div className="col-md-7">
          {products.map((x) => (
            <div className="cartCard">
              <img src={x.img} alt="" />
              <div>
                <h3>{x.pro_name}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt illum .
                </p>
                <h3>${x.price}</h3>
              </div>
              <div className="add_del_box">
                <span>{x.quantity}pcs</span>
                <span>
                  <button onClick={() => dispatch(addQuantity(x.id))}>+</button>
                  <button
                    onClick={() => dispatch(subtractQuantity(x.id))}
                    disabled={x.quantity === 0}
                  >
                    -
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5 cart__summary">
          <h3>Summary</h3>
          <div>
            <input type="text" placeholder="enter coupon code here" />
          </div>
          <div>
            <h3>SubTotal</h3>
            <h3>{subTotal}$</h3>
          </div>
          <div>
            <h3>Shipping</h3>
            <h3>Free</h3>
          </div>
          <div>
            <h3>Taxes</h3>
            <h3>13$</h3>
          </div>
          <div>
            <h3>Total</h3>
            <h3>{subTotal !== 0 ? subTotal + 13 : 0}$</h3>
          </div>
        </div>
      </div>
      <div className="d-flex-box">
        <button className="btn btn-primary mt-5">next</button>
        <button className="btn btn-danger mt-5">Cancel</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
