import Brand from "@/components/brand/Brand";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Input from "@/components/input/Input";
import Studio from "@/components/studio/Studio";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brand />

      <Input />
      <Studio />
    </>
  );
};

export default Home;
