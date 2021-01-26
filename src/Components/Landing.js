import React from "react";

const Landing = () => {
  return (
    <div className="container landing">
      <h2>Great Style, Great Service</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://www.next.sa/nxtcms/resource/blob/3811238/e4c91df0244d73dc4970b2deef8a319d/mens-polos-data.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://www.next.sa/nxtcms/resource/blob/3811234/bb096bf0c0bda80d778fb6429cd7627b/boys-coord-data.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="https://www.next.sa/nxtcms/resource/blob/3811186/75c72480ca960d415870790a4947e954/frills---florals-data.jpg"
            alt=""
          />
        </div>
      </div>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  );
};

export default Landing;
