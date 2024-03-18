"use client";
import { cartImg } from "@/assets/index";
// import Image from "next/image";
import React, { useState } from "react";
import Image from "../../../node_modules/next/image";

const Cart = () => {
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
    <div className="container mx-auto lg:px-[62px] px-[20px]">
      <p className="sm:text-[36px] text-[24px] md:pt-[64px] text-center md:text-start pb-[40px] sm:pb-[50px]">
        Your shopping cart
      </p>
      <div className="justify-between  hidden sm:flex pb-[12px] ">
        <p className="text-[14px] text-[#2A254B] dark:text-slate-200">
          Product
        </p>
        <p className="text-[14px] text-[#2A254B] dark:text-slate-200 pl-48">
          Quantity
        </p>
        <p className="text-[14px] text-[#2A254B] dark:text-slate-200">Total</p>
      </div>
      <hr className=" pt-[12px]  hidden sm:flex" />
      <div className="flex sm:justify-between py-[20px] items-center justify-center">
        <div className="flex">
          <Image
            src={cartImg}
            alt="CartImage"
            className="sm:w-[109px] sm:h-[134px] w-[133px] h-[170px]"
          />
          <div className="flex flex-col">
            <p className="text-[20px] text-[#2A254B] dark:text-slate-200 pl-[21px]">
              Graystone vase
            </p>
            <p className="text-[14px] py-2 text-[#2A254B] dark:text-slate-200 pl-[21px] max-w-[179px]">
              A timeless ceramic vase with a tri color grey glaze.
            </p>
            <p className=" text-[#2A254B] dark:text-slate-200 pl-[21px]">£85</p>
            <div className="items-center gap-5 pl-[21px] flex sm:hidden">
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </div>
        <div className="items-center gap-5 pl-[21px] hidden sm:flex">
          <button onClick={decreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <p className="text-[18px] hidden sm:block">
          £ {pricePerProduct * quantity}
        </p>
      </div>

      <div className="">
        <p className="sm:text-end text-center pt-4">Subtotal £ {totalPrice}</p>
        <p className="sm:text-end text-center">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="flex justify-center sm:justify-end">
          <button
            type="submit"
            className=" mb-[48px] mt-4 w-[172px]  flex  items-center justify-center h-[56px] bg-[#1a253c] text-slate-200 font-medium"
          >
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
