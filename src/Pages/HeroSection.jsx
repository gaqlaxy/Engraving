import React from "react";
import Navbar from "../Components/Navbar";

export default function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <Navbar />
        <div className="p-10 flex justify-between gap-5 hero-content ">
          <div className="mt-20">
            <h1 className="text-8xl font-extrabold tracking-wider text-white">
              Endrum <br /> Engraving
            </h1>
            <p className="text-white text-lg my-8 ">
              Custom engraving services for metal tools, <br /> gold & silver
              products, and more.
            </p>
            <a
              href=""
              className="rounded-full text-white tracking-wider  px-4 py-2 text-normal bg-[#e6c200] hover:bg-[#FFD700] font-bold transition-colors duration-200"
            >
              Explore
            </a>
          </div>
          {/* <div className="relative">
          <img
          src="heroimg1.jpg"
          alt=""
          className="w-1/2 absolute top-3 right-4 "
          />
          <img src="heroimg2.jpg" alt="" className="w-1/2 absolute bottom-0 " />
          <img src="heroimg3.jpg" alt="" className="w-1/2 " />
          </div> */}
        </div>
      </div>
    </>
  );
}
