import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="font-Sen text-white">
        <nav className="flex items-center justify-between px-10  py-4">
          <h1 className="text-3xl font-bold">Endrum</h1>
          <div className="flex gap-10 items-center">
            <ul className="flex justify-between gap-6 text-normal font-bold ">
              <li className="hover:text-[#e6c200] transition-colors duration-200 cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#e6c200] transition-colors duration-200 cursor-pointer">
                Services
              </li>
              <li className="hover:text-[#e6c200] transition-colors duration-200 cursor-pointer">
                Our Works
              </li>
              <li className="hover:text-[#e6c200] transition-colors duration-200 cursor-pointer">
                About
              </li>
              <li className="hover:text-[#e6c200] transition-colors duration-200 cursor-pointer">
                Contact
              </li>
            </ul>
            <a
              href=""
              className="rounded-full  px-4 py-2 text-normal bg-[#e6c200] hover:bg-[#FFD700] font-bold transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
