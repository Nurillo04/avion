"use client";

import allDatas from "../../store/Store";
import { useEffect } from "react";

const OurProducts = () => {
  let { loading, datas, getDatas } = allDatas();

  useEffect(() => {
    getDatas();
  }, []);

  let url = new URL(
    "https://firebasestorage.googleapis.com/v0/b/mernblog-snd.appspot.com/o/1710543813228-Photo%20(2).png?alt=media&token=5d71d8dc-2c36-47bd-8b0b-9b2366477ff"
  );

  useEffect(() => {
    console.log(url.pathname);
    console.log(url.port);
    console.log(url.hostname);
  }, []);

  return (
    <div>
      <section className=" flex pt-[48px] relative pb-[38px]">
        <div className=" container pl-[26px]">
          <div className="w-full ">
            <p className="mb-[36px] text-[#2A254B] lg:text-[32px]">
              Our popular products
            </p>
          </div>
          <div className="flex flex-wrap sckrollers pl cursor-pointer">
            {datas.map(
              (
                e: {
                  image: string;
                  name: string;
                  price: number;
                  category: string;
                  description: string;
                },
                i
              ) => (
                <div
                  className=" hover:bg-slate-200 w-[200px] p-[10px] rounded-lg"
                  key={i}
                >
                  <img className=" rounded-md" src={e.image} alt="alt" />
                  <p className="mb-[8px] lg:mt-[10px] lg:mb-[15px]">{e.name}</p>
                  <p>£{e.price}</p>
                </div>
              )
            )}
          </div>
          <div className="w-full flex justify-center mt-[32px] lg:mt-[42px]">
            <button className=" w-[342px] ld:w-[170px] h-[56px] bg-[#F9F9F9]">
              View collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
