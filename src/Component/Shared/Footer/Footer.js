import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p>
              Millions of people of all ages and form around the world are
              improving their life with us
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-center">Course</h5>
            <ul className="list">
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-center">Outline</h5>
            <ul className="list">
              <li>
                <a href="#">First className</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-center">Duration</h5>
            <ul className="list">
              <li>
                <a href="#">January</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web design</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-4">
          Copyrighy &copy 2023 watch project with MD.SAMIUL HOSSAIN
        </p>
      </div>
    </footer>
  );
};

export default Footer;
