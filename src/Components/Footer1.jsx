import React from "react";
import logo from "../Components/imgs/meat.png";
const Footer1 = () => {
  return (
    <div className="footer1main">
      <div className="licimgdiv">
        <img src={logo} alt="" />
        <div className="licbrake"> </div>
      </div>
      <div className="footermain1">
        <div className="footerpart1">
          <h7>EXPERIENCE LICIOUS APP ON MOBILE</h7>
          <div className="footimgdiv">
            <img
              src="https://www.licious.in/image/rebranding/png/app-store-homepage.png"
              alt=""
            />
            <img
              src="https://www.licious.in/image/rebranding/png/playstore-homepage.png"
              alt=""
            />
          </div>
          <div className="footerbirdmain">
            <h5>keep in touch</h5>
            <div className="foooterbirddiv">
              <img
                src="https://www.licious.in/image/rebranding/png/twitter-homepage.png"
                alt=""
              />
              <img
                src="https://www.licious.in/image/rebranding/png/fb-homepage.png"
                alt=""
              />
              <img
                src="https://www.licious.in/image/rebranding/png/insta-homepage.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="usefuldivmain">
          <h5> USEFUL LINKS</h5>
          <div className="footeruseful">
            <span>Why Licious?</span>
            <span>Refer & Earn</span>
            <span>Licious Cash and Cash+</span>
            <span>Careers</span>
            <span>BLOG</span>
          </div>
        </div>

        <div className="aboutdivfoot">
          <span>About Us</span>
          <span>Bug Bounty Guidelines</span>
          <span>T&C</span>
          <span>FAQ</span>
          <span>Privacy Policy</span>
          <span>FSSC 22000 Certification</span>
          <span>SA8000 Certification</span>
          <span>Sitemap</span>
        </div>

        <div className="footercontact">
          <h5> Contact Us</h5>
          <span>Call: 1800-4190-786</span>
          <span>talktous@licious.com</span>
          <span>REGISTERED OFFICE ADDRESS:</span>
          <span>DELIGHTFUL GOURMET PVT LTD</span>
          <span>Maruthi Infotech Center 11/1,12/1 B wing 1st</span>
          <span>Floor Amarjyothi layout Intermediate ring</span>
          <span>road Domlur, B.B.M.P East, Karnataka-560071</span>
          <span>Bangalore, Karnataka - 560071</span>
          <img
            src="https://www.licious.in/image/rebranding/png/3-dsecure.png"
            alt=""
          />
          <div className="secudiv">
            <h6>HAVE SECURITY CONCERN? </h6>
            <span>Mail us to: security@licious.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
