import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container bg-primary footer">
      <div className="row">
        <div className="col-md-4">
          <Link>Logo</Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui eius
            voluptates at i!
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-3">
              <p>Main Menu</p>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>Shop</Link>
              <Link>Help</Link>
            </div>
            <div className="col-md-3">
              <p>COMPANY</p>
              <Link>The Company</Link>
              <Link>Careers</Link>
              <Link>Press</Link>
            </div>
            <div className="col-md-3">
              <p>Join Us</p>
              <Link>The Company</Link>
              <Link>Careers</Link>
              <Link>Press</Link>
            </div>
            <div className="col-md-3">
              <p>Find Us On</p>
              <Link>FaceBook</Link>
              <Link>Twitter</Link>
              <Link>LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
