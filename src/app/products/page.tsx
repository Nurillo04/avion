"use client";
import { card1, card2, card3, card4, DandyChair } from "@/assets/index";
import OurProducts from "@/components/ourProducts/OurProducts";

import React, { useState } from "react";
import Image from "../../../node_modules/next/image";

const Products = () => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenSorting, setIsOpenSorting] = useState(false);

  const toggleDropdownFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const toggleDropdownSorting = () => {
    setIsOpenSorting(!isOpenSorting);
  };
  return (
    <div>
      <div className="sm:flex container mx-auto lg:pl-[80px] sm:pl-[20px] pl-[10px] sm:pr-[20px] pr-[10px] pt-[48px]">
        {/* Dropdown in phone */}
        <div className="flex justify-between">
          <div className="sm:hidden">
            <div>
              <select
                name="all"
                id="all"
                className="inline-flex justify-center  dark:bg-[#253454] dark:text-slate-200 rounded-md border border-gray-300 shadow-sm py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[120px]"
              >
                <option
                  value="furniture"
                  className="opacity-85 text-[0.875rem]"
                >
                  Furniture
                </option>
                <option value="homeware" className="opacity-85 text-[0.875rem]">
                  Homeware
                </option>
                <option value="sofas" className="opacity-85 text-[0.875rem]">
                  Sofas
                </option>
                <option
                  value="lightFittings"
                  className="opacity-85 text-[0.875rem]"
                >
                  Light fittings
                </option>
                <option
                  value="accessories"
                  className="opacity-85 text-[0.875rem]"
                >
                  Accessories
                </option>
              </select>
            </div>
          </div>

          <div className="sm:hidden">
            <div>
              <button
                type="button"
                className="inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2  dark:bg-[#253454] dark:text-slate-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[120px]"
                onClick={toggleDropdownSorting}
              >
                Sorting
              </button>
              {isOpenSorting && (
                <div className="dropdown-content flex flex-col absolute right-2 text-gray-900 dark:bg-[#253454] bg-slate-200 opacity-85 dark:border-gray-600 dark:text-slate-200 rounded-lg w-[120px] mt-1">
                  <div className="w-full rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="vue-checkbox"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        0 - 100
                      </label>
                    </div>
                  </div>
                  <div className="w-full rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="vue-checkbox"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        101 - 250
                      </label>
                    </div>
                  </div>
                  <div className="w-full rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="vue-checkbox"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        250 +
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[30vh] hidden sm:block">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Product type
          </h3>
          <ul className="w-48 text-sm font-medium text-gray-900 dark:bg-[#253454] bg-white dark:border-gray-600 dark:text-white">
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Furniture
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="react-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Homeware
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="angular-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sofas
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="laravel-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Light fittings
                </label>
              </div>
            </li>

            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="laravel-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Accessories
                </label>
              </div>
            </li>
          </ul>
          <h3 className="mb-4 pt-[48px] font-semibold text-gray-900 dark:text-white">
            Price
          </h3>
          <ul className="w-48 text-sm font-medium text-gray-900  dark:bg-[#253454] bg-white dark:border-gray-600 dark:text-white">
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  0 - 100
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="react-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  101 - 250
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="angular-checkbox"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  250 +
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className=" flex flex-wrap justify-center py-[20px] sm:py-[34px] gap-3 sm:gap-5 ">
            <div>
              <Image
                src={card1}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card2}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card3}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card4}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={DandyChair}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card1}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card2}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card3}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>
            <div>
              <Image
                src={card4}
                alt="DandyChair"
                className="w-[163px] sm:w-[300px] h-[201px] sm:h-[375px]"
              />
              <p className="text-[#1a253c] dark:text-slate-300 pt-6 text-[20px]">
                The Dandy chair{" "}
              </p>
              <p className="text-[#1a253c] dark:text-slate-300 pt-2 text-[18px]">
                £250
              </p>
            </div>

            {/* <OurProducts /> */}
          </div>
          <button className="w-[260px] mb-8  mx-auto  bg-gray-300 text- text-[#1a253c] dark:bg-[#f9f9f93c]  px-8 py-4 sm:w-[220px]">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
