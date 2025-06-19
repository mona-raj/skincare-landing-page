import React from "react";
import Navbar from "./Navbar";
import ProfileBtn from "./ProfileBtn";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[4.4vh] pb-[4.4vh] pl-[5vw] pr-[5vw] text-accent bg-secondary font-inter ">
      <h1 className="font-extrabold uppercase text-[1.875em] ">skincare</h1>
      <Navbar />
      <div className="flex items-center justify-between gap-2">
        <ProfileBtn url="..\src\assets\svg\bag.svg" />
        <p className="font-normal tracking-[-5%]">Cart (1)</p>
        <ProfileBtn url="..\src\assets\svg\heart.svg" />
        <ProfileBtn url="..\src\assets\svg\person.svg" />
      </div>
    </header>
  );
};

export default Header;
