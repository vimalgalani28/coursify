import { faShoppingCart, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AppButton from "../Burron/AppButton";
import "./header.css";

const Header = () => {
  return (
    <div className="header mb-2">
      <div className="flex items-center px-6 h-16 justify-between">
        <div className="logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="logo"
          />
        </div>
        <div className="flex items-center md:space-x-3 xs:space-x-2">
          <div>
            <div className="cart-header-icon heading6 regular">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="hedaer-shover w-80 p-4">
                <p className="paragraph2 header-shover-text mb-2">
                  Your Cart is Empty
                </p>
                <a href="/home" className="paragraph1 header-shover-link bold">
                  Keep Shopping
                </a>
              </div>
            </div>
          </div>
          <div>
            <AppButton className="btn-outline">Login</AppButton>
          </div>
          <div>
            <AppButton className="btn-dark">Sign up</AppButton>
          </div>
          <div>
            <AppButton className="btn-outline">
              <FontAwesomeIcon icon={faWifi} />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
