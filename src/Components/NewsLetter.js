import React from "react";

const NewsLetter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <h2>Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            delectus asperiores quibusdam officia illo laudantium a itaque
            veniam ea cupiditate eveniet esse perferendis sint quod eum
            exercitationem, tempora sunt recusandae.
          </p>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <input type="text" className="W-75" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
