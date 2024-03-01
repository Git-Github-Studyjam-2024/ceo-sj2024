import React from "react";
import background_group from "../static/imgs/BACKGROUND_1.jpeg"
import background_2 from "../static/imgs/BACKGROUND_2.jpeg"
const Home = () => {
  return (
    <div className="h-100 d-flex flex-lg-row justify-content-lg-around align-items-lg-center 
                            flex-md-column-reverse justify-content-md-around align-items-md-center
                            flex-sm-column-reverse justify-content-sm-around align-items-sm-center">
    <div className="">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="title display-4 h1 fw-bold text-white">Git & Github Study Jam</div>
        <div className="subtitle h2 fw-bolder fst-italic text-decoration-underline text-warning">GDSC - HCMUTE 2024</div>
        <div className="h3 fst-italic text-white">Code Engineering Overlords</div>
      </div>
      <div className="h4 fw-light fst-italic text-white d-flex justify-content-center">
          Accelerate – Breakthrough – Master the future
      </div>
    </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-50 m-w-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          {/* <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          /> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={background_group}
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img
              src={background_2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img
              src={require("../static/imgs/BACKGROUND_3.jpeg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../static/imgs/BACKGROUND_4.jpeg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>four slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../static/imgs/BACKGROUND_5.jpeg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>five slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
