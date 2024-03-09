import React from "react";
import logo from "./../static/imgs/KienPhan.png";
import "./style.css";

const About = () => {
  return (
    <div className="w-100 h-75 px-5 d-flex justify-content-center about-modify">
      <section id="about" className="shadow-blue white-bg w-100 h-100 d-flex flex-column justify-content-center algin-items-center">
        <div>
          <div
            className="spacer"
            data-height="40"
            style={{ height: "80px" }}
          ></div>
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="about" className="pc-logo" />
            </div>
            <div className="col-md-9">
              <h2 className="mt-4 mt-md-0 mb-4">Hello, </h2>
              <p className="content">
                I'm Kien, a junior student at HCMUTE. Computers, programming,
                offline games, and football are all things that I'm passionate
                about. Currently, as an electronic engineering student, I'm
                still cultivating specialized knowledge and honing my skills in
                embedded programming, software building, PCB making and computer
                vision.{" "}
              </p>
              <div className="row my-4">
                <div className="col-md-6">
                  <p className="mb-2">
                    Name: <span className="text-dark">Phan Duy Kien </span>
                  </p>
                  <p className="mb-2">
                    Address:{" "}
                    <span className="text-dark">Trang Bom, Dong Nai </span>
                  </p>
                  <p className="mb-2">
                    University:{" "}
                    <span className="text-dark">
                      Ho Chi Minh City University of Technology and Education{" "}
                    </span>
                  </p>
                </div>
                <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
                  <p className="mb-2">
                    Phone: <span className="text-dark">0943145813 </span>
                  </p>
                  <p className="mb-2">
                    Email:{" "}
                    <span className="text-dark">kienphan30103@gmail.com </span>
                  </p>
                  <p style={{ textAlign: "left" }}>
                    Major:{" "}
                    <span className="text-dark">
                      Automation and Control Engineering Technology{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="social-icons list-inline d-flex justify-content-center algin-items-center h3">
          <li class="list-inline-item">
            <a href="https://www.facebook.com/kienphan30103">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.instagram.com/kiennphan/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/duykienphan">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="mailto:kienphan30103@gmail.com">
              <i class="fab fa-google"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
