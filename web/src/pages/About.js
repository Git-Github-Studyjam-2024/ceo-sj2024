import React from "react";
import "./style.css";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
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
    </div>
  );
};

export default About;