import React from "react";
import logo from "../image/marvel-logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-8 py-4 ">
        <a href="/"><img className="w-36" src={logo} alt="" /></a>
        <a className="text-lg" href="/">Favoriler</a>
      </div>
    </>
  );
};

export default Header;
