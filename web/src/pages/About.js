
import React from "react";
import pic_thuan from "./../static/imgs/pic_thuan.jpg";
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
      <div className='d-flex justify-content-between'>
      <div className='h-auto about-info d-flex flex-column justify-content-center align-items-start text-white'>
        <span className='py-3 display-8 d-flex justify-content-center '>
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

      <div>
        <img src={pic_thuan} alt="pic_thuan" className="style_pic_thuan" />
      </div>
      <div className=" justify-content-center align-items-center">
        <div
          className="fw-bold text-uppercase h1 text-white border-bottom"
          style={{ textShadow: "1px 1px 4px #fff" }}
        >
          ABOUT ME
        </div>
        <div className="pt-2 w-100">
          <ul className="w-100 d-flex flex-column">
            <li className="">
              <span className="d-flex flex-row justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-person text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <span className="fs-3 ps-3 text-white">Họ và Tên</span>
              </span>
              <span className="text-white fs-2 py-1 justify-content-center">Võ Minh Thuận</span>
            </li>
            <li className="pt-1">
              <span className="d-flex flex-row justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-highlighter text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"
                  />
                </svg>
                <span className="fs-3 ps-3 text-white py-2">
                  Sơ lược về bản thân
                </span>
              </span>
              <span className="text-white fs-4 ps-2">
                Ngành học: CNKT - Điện tử viễn thông
              </span>
              <br />
              <span className="text-white fs-4 ps-2">Khóa học: K21</span>
              <br />
              <span className="text-white fs-4 ps-2">
                Sở thích: thích xem phim hoạt hình, câu cá, <br /> đạp xe đạp,
                nguyên cứu và lập trình những <br /> hệ thống thông minh,...
              </span>
            </li>
            <li className="pt-3">
              <span className="d-flex flex-row justify-content-start align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-person-rolodex text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                </svg>
                <span className="fs-3 ps-3 text-white">Thông tin liên hệ</span>
              </span>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <a
                  className=" px-2 btn btn-link"
                  href="https://github.com/VM-Thuan-2003"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <a
                  className=" px-2 btn btn-link"
                  href="https://www.facebook.com/vominh.thuan.1004/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                <a className="px-2 btn btn-link" href="tel:0355524273">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </a>
                <a
                  className=" px-2 btn btn-link"
                  href="https://www.linkedin.com/in/wife-pure-587604209/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;



