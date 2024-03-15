import { card1, card2, card3, card4 } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards__wrapper">
          <h3>New ceramics</h3>
          <ul className="cards__list">
            <li className="cards__item">
              <Image src={card1} alt="rasm" />
              <h5>The Dandy chair</h5>
              <p>£250</p>
            </li>

            <li className="cards__item">
              <Image src={card2} alt="rasm" />
              <h5>Rustic Vase Set</h5>
              <p>£155</p>
            </li>
            <li className="cards__item">
              <Image src={card3} alt="rasm" />
              <h5>The Silky Vase</h5>
              <p>£150</p>
            </li>
            <li className="cards__item">
              <Image src={card4} alt="rasm" />
              <h5>The Lucy Lamp</h5>
              <p>£399</p>
            </li>
          </ul>
          <div className="cards__btns">
            {" "}
            <button className="cards__btn">View collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
