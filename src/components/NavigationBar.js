import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Style from "./NavigationBar.module.css";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handlOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/?query=${query}`, { replace: true });
  };
  const getvalue = (e) => {
    setQuery(e.target.value);
  };
  return (
    <header className={Style["allpage-header"]}>
      <nav className={Style["nav-body"]}>
        <div className={Style["link-logo"]}>
          <img
            src={require("../images/Udemy-logo.png")}
            className={Style["logo"]}
            alt="UdemyLogo"
          />
        </div>

        <div className={Style["link-categories"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <span className={Style["text-nav-body"]}>Categories</span>
          </a>
        </div>

        <form id="fo" className={Style["search-bar"]} onSubmit={handlOnSubmit}>
          <button type="submit">
            <i
              className="fa fa-search"
              aria-hidden="true"
              id="search-button"
            ></i>
          </button>
          <input
            type="text"
            placeholder="Search for anything"
            className={Style["search-box"]}
            onChange={getvalue}
          />
        </form>

        <div className={Style["link-udemybusiness"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <span className={Style["text-nav-body"]}>Udemy Business</span>
          </a>
        </div>

        <div className={Style["link-teachonudemy"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <span className={Style["text-nav-body"]}>Teach on Udemy</span>
          </a>
        </div>

        <div className={Style["link-cart"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <img
              src={require("../images/cart.png")}
              className={Style["cart-icon"]}
              alt="cart"
            />
          </a>
        </div>

        <div className={Style["link-menu"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <img
              src={require("../images/menu-icon.png")}
              className={Style["menu-icon"]}
              alt="menu"
            />
          </a>
        </div>

        <div className={Style["link-search"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <i
              className={"fa fa-search"}
              aria-hidden="true"
              id="search-button"
            ></i>
          </a>
        </div>

        <div className={Style["link-login"]}>
          <a href="#" className={Style["link-nav-body-login"]}>
            <span className={Style["text-navbar"]}>Log in</span>
          </a>
        </div>

        <div className={Style["link-signup"]}>
          <a href="#" className={Style["link-nav-body-signup"]}>
            <span className={Style["text-navbar"]}>Sign up</span>
          </a>
        </div>

        <div className={Style["link-language"]}>
          <a href="#" className={Style["links-nav-body"]}>
            <img
              src={require("../images/language-icon.png")}
              className={Style["language-icon"]}
              alt="languages"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
