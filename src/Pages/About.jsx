import React from "react";

export default function About() {
  return (
    <>
      <div className="aboutus flex justify-between relative ">
        <div className="aboutus-content p-10">
          <h1 className="text-4xl font-bold ">About us</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            minima consectetur mollitia corporis exercitationem, doloribus ab
            sequi cum blanditiis harum iste quod quia optio fugiat repellendus
            nulla praesentium esse quos.
          </p>
        </div>
        <div className="aboutus-img relative">
          <img
            src="heroimg2.jpg"
            alt=""
            className="w-1/2 relative top-[0rem] left-[-17px] z-10"
          />
          <img
            src="heroimg3.jpg"
            alt=""
            className="w-1/2 absolute top-[9.5rem] right-[11rem] z-20"
          />
          <img
            src="heroimg1.jpg"
            alt=""
            className="w-1/2 absolute right-[2rem] top-[1.25rem] z-10 "
          />
        </div>
      </div>
    </>
  );
}
