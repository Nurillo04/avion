import { studioImg } from "@/assets/index";
import Brand from "@/components/brand/Brand";
import Studio from "@/components/studio/Studio";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./About.scss";

const About = () => {
  return (
    <div className="studios">
      <div className="container">
        <div className="wrapper">
          <h3 className="studios__title">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </h3>
          <Studio />
        </div>
      </div>

      <div className="studio">
        <div className="container">
          <div className="studio__wrapper">
            <div className="studio__right">
              <Image src={studioImg} alt="rasm" />
            </div>
            <div className="studio__left">
              <h3>
                From a studio in London to a global brand with over 400 outlets
              </h3>
              <p>
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
              <button className="studio__btn">Get in touch</button>
            </div>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default About;
