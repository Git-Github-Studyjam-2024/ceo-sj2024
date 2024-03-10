
import React from "react";
import logo from "./../static/imgs/KienPhan.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import pic_Du from "./../static/imgs/LcYuu's picture.jpg";
import "./style.css";
import imgNhi from "./../static/imgs/img_Nhi.jpg"
import "./style.css"
const About = () => {
  return (
    <div >
     
      <div className="h-100 w-100 d-flex flex-row justify-content-around align-items-top col-md-2">
        <div className="flex-col align-items-center d-block col-md-2">
          <h1 className="text-white">
            ABOUT ME</h1>
          <h5 className="text-white">Sú Minh Luân</h5>
          <h5 className="text-white">21110900</h5>
          <p className="text-white">Sinh viên năm 3 <br /> Trường Đại Học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh <br /></p>
          <p className="text-white">Yêu thích:
            <ul>
              <li>Lập trình</li>
              <li>Cầu lông</li>
              <li>Bi da</li>
            </ul></p>
          <div className="d-flex flex-row justify-content-center align-items-left">
            <a href="https://github.com/luansu" >
              <FaGithub className="icons" /> </a>
            <a href="https://www.facebook.com/luan.su.52/" >
              <FaFacebookSquare className="icons" /></a>
            <a href="https://www.linkedin.com/in/s%C3%BA-lu%C3%A2n-35185327b/" >
              <FaLinkedin className="icons" /></a>
          </div>
        </div>
        <div>
          <img src={require("./../static/imgs/luansu.JPG")}
            className="style_pic_luan" />
        </div>

        <div class="row d-flex justify-content-center">

          <div class="col-md-7 ">

            <div class="card p-3 py-6 card custom-card " >

              <div class="text-center  mx-auto style_pic_Du">
                <img src={pic_Du} alt="pic_Du" class="rounded-circle" />
              </div>

              <div class="text-center mt-3">
                <span class="bg-secondary p-1 px-4 rounded text-white">About me</span>
                <h5 class="mt-2 mb-1 text-success ">Lương Chin Du</h5>
                <span>I'm a third-year student majoring in software engineering at HCMUTE</span>

                <div class="px-4 mt-4">
                  <h4 class="lead display-7 custom_text">I am an active person (sometimes not 😁). I love music, enjoy singing, reading, and learning coding. </h4>
                  <h3>You gotta Try!</h3>

                </div>

                <ul class="social-list">

                  <li> <a href="https://www.facebook.com/profile.php?id=100031161789702" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }} /> </a></li>
                  <li><a href="https://www.instagram.com/lcd.1110/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: 'palevioletred' }} /> </a></li>
                  <li><a href="https://github.com/LcYuu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} /> </a></li>
                  <li><a href="https://www.linkedin.com/in/chin-du-l%C6%B0%C6%A1ng-939163219/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'blue' }} /> </a></li>
                  <li><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'orange' }} /> </a></li>
                </ul>

                <div class="buttons">

                  <button class="btn btn-outline-primary px-4">Message</button>
                  <button class="btn btn-primary px-4 ms-3">Contact</button>


                </div>


              </div>


            </div>

          </div>

        </div>
        
        <section id="about" className=" text-white shadow-blue white-bg w-100 h-100 d-flex flex-column justify-content-center algin-items-center">
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
                <p className="content ">
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
                      Name: <span className="text-white">Phan Duy Kien </span>
                    </p>
                    <p className="mb-2">
                      Address:{" "}
                      <span className="text-white">Trang Bom, Dong Nai </span>
                    </p>
                    <p className="mb-2">
                      University:{" "}
                      <span className="text-white">
                        Ho Chi Minh City University of Technology and Education{" "}
                      </span>
                    </p>
                  </div>
                  <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
                    <p className="mb-2">
                      Phone: <span className="text-white">0943145813 </span>
                    </p>
                    <p className="mb-2">
                      Email:{" "}
                      <span className="text-white">kienphan30103@gmail.com </span>
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Major:{" "}
                      <span className="text-white">
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
      <div className='h-auto about-info d-flex flex-column justify-content-center align-items-start text-white'>
        <span className='py-3 display-8'>
          Chào mọi người. Tôi là
        </span>
        <span className='display-5 border-top border-bottom '>
          Tuyết Nhi
        </span>
        <span className='py-3 display-8'>
          Sinh viên năm 3 Trường Đại học Sư phạm Kỹ thuật TPHCM
        </span>
        <span className='display-8'>
          Mục tiêu: Lương ngàn đô
        </span>
      </div>
      <div className='about-image'>
        <img src={imgNhi} alt='image nhi' className='about-image-style' width={300} height={400} />
      </div>
    </div>
  )
}

export default About;


