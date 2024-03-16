import { avatar, karzinka, search } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
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
              <li>
                {" "}
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/product">Products</Link>
              </li>
              <li>Product Details</li>
            </ul>
            <Image src={search} alt="search" />
            <Link href="/korzinka">
              {" "}
              <Image className="header__img" src={karzinka} alt="karzinka" />
            </Link>
            {/* <Image className="header__img" src={karzinka} alt="karzinka" /> */}
            <Image className="header__img" src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
