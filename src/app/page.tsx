import Brand from "@/components/brand/Brand";
import Cards from "@/components/cards/Cards";
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
      <Cards />
      {/* <OurProducts /> */}
      <Input />
      <Studio />
    </>
  );
};

export default Home;
