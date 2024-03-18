"use client";
import { card1, card2, card3, card4, DandyChair } from "@/assets/index";
import Brand from "@/components/brand/Brand";
import Input from "@/components/input/Input";
import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import "./productDetails.scss";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerProduct = 85;
  const [totalPrice, setTotalPrice] = useState(pricePerProduct);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + pricePerProduct);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - pricePerProduct);
    }
  };

  return (
    <div>
      <div className="container md:mx-auto  lg:px-[62px] px-[10px]">
        <div className="justify-center mx-auto  sm:flex  md:py-[50px] pt-[0px] pb-[20px]">
          <div className="  w-[100%] sm:w-[50%]">
            <Image
              src={DandyChair}
              alt="DandyChair"
              className="h-[390px] w-[100%] sm:w-[550px] sm:h-[650px] md:h-[750px] md:w-[729px]"
            />
          </div>
          <div className=" w-[100%] sm:w-[60%] md:w-[50%] md:p-10 sm:p-8 pl-4 pt-4">
            <p className="sm:text-[32px] text-[24px] leading-10 dark:text-slate-200 text-[#1a253c] pb-8">
              The Dandy Chair
            </p>
            <p className="text-2xl dark:text-slate-200 text-[#1a253c]">£250</p>
            <p className="  md:pt-[80px]  pt-[20px] dark:text-slate-200 text-[#1a253c]">
              Description
            </p>
            <p className="text-[18px] leading-7 dark:text-slate-200 text-[#1a253c]">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <ul className="pt-5">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            <p className="dark:text-slate-200 text-[#1a253c] pt-[27px]">
              Dimensions
            </p>
            <div className="flex justify-between max-w-[251px] pt-4 sm:pt-7">
              <div>
                <p>Height</p>
                <p>110cm</p>
              </div>
              <div>
                <p>Width</p>
                <p>75cm</p>
              </div>
              <div>
                <p>Depth</p>
                <p>50cm</p>
              </div>
            </div>
            <div className="flex items-center mt-5 md:pt-10">
              <div className="flex items-center gap-5 px-4">
                <button onClick={decreaseQuantity}>-</button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button
                type="submit"
                className="w-[232px] mx-auto   text-[#fff] dark:bg-[#f9f9f93c] bg-[#1a253c] px-8 py-4"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="container">
          <div className="cards__wrapper">
            <h3>You might also like</h3>
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
      <Brand />
      <Input />
    </div>
  );
};

export default ProductDetails;
