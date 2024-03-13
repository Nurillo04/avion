import React from "react";
import "./Input.scss";

const Input = () => {
  return (
    <div className="input">
      <div className="container">
        <div className="input__wrapper">
          <h3 className="input__title">Join the club and get the benefits</h3>
          <p className="input__text">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <input
            className="input__plc"
            type="text"
            placeholder="your@email.com"
          />
          <button className="input__btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
