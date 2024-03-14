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
          <h4>Avion</h4>
          <div className="header__right">
            <ul className="header__item">
              <li>Home </li>
              <li>About </li>
              <li>Product Listings</li>
              <li>Product Details</li>
              <li>Shopping baskets</li>
            </ul>
            <Image src={search} alt="search" />
            <Image className="header__img" src={karzinka} alt="karzinka" />
            <Image className="header__img" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
