import Brand from "@/components/brand/Brand";
import Card2 from "@/components/card2/card2";
import Cards from "@/components/cards/Cards";
// import Header from "@/components/header2/Header22";
import Hero from "@/components/hero/Hero";
import Input from "@/components/input/Input";
import OurProducts from "@/components/ourProducts/OurProducts";
import Studio from "@/components/studio/Studio";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      {/* <Cards /> */}
      <Card2 />
      <OurProducts />
      <Input />
      <Studio />
      {/* <Header /> */}
    </>
  );
};

export default Home;
