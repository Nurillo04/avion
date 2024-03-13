import { brand1, brand2, brand3, brand4 } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="brand">
      <div className="container">
        <div>
          <h5 className="brand__title">What makes our brand different</h5>
          <ul className="brand__item">
            <li className="brand__list">
              <Image src={brand1} alt="rasm" />
              <h6>Next day as standard</h6>
              <p>
                Order before 3pm and get your order the next day as standard
              </p>
            </li>

            <li className="brand__list">
              <Image src={brand2} alt="rasm" />
              <h6>Made by true artisans</h6>
              <p>
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </li>

            <li className="brand__list">
              <Image src={brand3} alt="rasm" />
              <h6>Unbeatable prices</h6>
              <p>
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </li>

            <li className="brand__list">
              <Image src={brand4} alt="rasm" />
              <h6>Recycled packaging</h6>
              <p>
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brand;
