import { avatar, karzinka, search } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import Navbar from "../navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header ">
          <Image src={search} alt="search" />
          <h4>Avion</h4>
          <div className="header__right">
            <ul className="header__item">
              <li>Home </li>
              <li>About </li>
              <li>Product Listings</li>
              <li>Product Details</li>
              <li>shopping baskets</li>
            </ul>
            <Image src={karzinka} alt="karzinka" />
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
