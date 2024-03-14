import { studioImg } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./Studio.scss";

const Studio = () => {
  return (
    <div className="studio">
      <div className="container">
        <div className="studio__wrapper">
          <div className="studio__left">
            <h3>
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </p>
            <button className="studio__btn">Get in touch</button>
          </div>
          <div className="studio__right">
            <Image src={studioImg} alt="rasm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
