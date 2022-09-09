import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Style["footer-box"]}>
      <div className={Style["links-and-language-selector"]}>
        <div className={Style["links"]}>
          <ul>
            <li>
              <a href="#">Udemy Business</a>
            </li>
            <li>
              <a href="#">Teach in Udemy</a>
            </li>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help and Support</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookie settings</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Accessibility statement</a>
            </li>
          </ul>
        </div>
        <div className={Style["link-language"]}>
          <img
            src={require("../images/language-icon-white.png")}
            alt="language selector"
          ></img>
          <span>English</span>
        </div>
      </div>
      <div className={Style["logo-copyright"]}>
        <div className={Style["logo"]}>
          <img src={require("../images/logo-udemy-inverted.png")}></img>
        </div>

        <div className={Style["copyright"]}>© 2022 Udemy, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
