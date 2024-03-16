import Brand from "@/components/brand/Brand";
import Cards from "@/components/cards/Cards";
// import Footer from "@/components/footer/Footer";

// import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Input from "@/components/input/Input";
import Studio from "@/components/studio/Studio";
import React from "react";

// import { chair } from "@/assets/index";
// import React from "react";
// import Image from "../../../node_modules/next/image";
// import "../components/hero/Hero.scss";
// import Image from "../../node_modules/next/image";

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Cards />
      <Input />
      <Studio />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
