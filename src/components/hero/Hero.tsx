import { chair } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">
            <h2>The furniture brand for the future, with timeless designs</h2>
            <button className="hero__btn">View collection</button>
            <p>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="hero__right">
            <Image src={chair} alt="rasm" width={400} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
