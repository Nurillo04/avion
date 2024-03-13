import { studioImg } from "@/assets/index";
import React from "react";
import Image from "../../../node_modules/next/image";
import "./Studio.scss";

const Studio = () => {
  return (
    <div className="studio">
      <div className="container">
        <div className="studio__wrapper">
          <div className="studio__left"></div>
          <div className="studio__right">
            <Image src={studioImg} alt="rasm" width={500} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
