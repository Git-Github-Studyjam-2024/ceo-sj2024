import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub , faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import pic_Du from "./../static/imgs/LcYuu's picture.jpg";
import "./style.css";

const About = () => {
  return (
    <div className="h-100 w-100 d-flex flex-row justify-content-around align-items-top">
      <div className="flex-col align-items-center">
        <h1 className="text-white">
                        ABOUT ME</h1>
        <h5 className="text-white">Sú Minh Luân</h5>
        <h5 className="text-white">21110900</h5>
        <p className="text-white">Sinh viên năm 3 <br/> Trường Đại Học Sư Phạm Kỹ Thuật Thành Phố Hồ Chí Minh <br/></p>
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

        <div class="col-md-5 ">

          <div class="card p-3 py-6 card custom-card " >

            <div class="text-center  mx-auto style_pic_Du">
              <img src={pic_Du}  alt="pic_Du" class="rounded-circle" />
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
                  <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }}/> </a></li>
                <li><a href="https://www.linkedin.com/in/chin-du-l%C6%B0%C6%A1ng-939163219/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: 'blue' }}/> </a></li>
                <li><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: 'orange' }}/> </a></li>
              </ul>

              <div class="buttons">

                <button class="btn btn-outline-primary px-4">Message</button>
                <button class="btn btn-primary px-4 ms-3">Contact</button>
               

              </div>


            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default About;