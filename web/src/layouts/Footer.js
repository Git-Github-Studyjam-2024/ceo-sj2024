import React from "react";
import logo_btc from "./../static/imgs/GDSCHCMUTE_LOGO_Vertical_White.png";
const Footer = () => {
  return (
    <footer className="d-flex flex-no-wrap justify-content-between align-items-center py-3 px-3 my-4 border-top">
      <div className="footer_logo">
        <img src={logo_btc} alt="logo_btc_footer" className="logo ps-3" />
        <ul className="footer_logo_list d-flex flex-row justify-content-center pt-2">
          <li className="footer_logo_item px-2">
            <a href="https://www.facebook.com/luan.su.52">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="footer_logo_item px-2">
            <a href="email: sm.luan2003@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="footer_logo_item px-2">
            <a href="tel:+84975271474">
              <i className="fa fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_contact">
        <div className="footer_contact--email">
          <span className="h4">Liên hệ</span>
          <div className="pt-2 pb-2">
            <span>
              sm.luan2003@gmail.com
              <br />
              https://www.facebook.com/luan.su.52
            </span>
          </div>
        </div>
        <div className="footer_contact--address">
          <span className="h4">Địa chỉ</span>
          <div className="pt-2">
            <span>
              01 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh
            </span>
          </div>
        </div>
      </div>
      <div className="footer_description">
      Code Engineering Overloads (CEO) are students participating in the Git & Github Study Jam by GDSC. By joining a CEO, you will see our impressive web ideas, apply GDSC's knowledge in a peer-to-peer learning environment.
      </div>
    </footer>
  );
};

export default Footer;
