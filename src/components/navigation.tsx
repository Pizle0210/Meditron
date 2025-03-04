import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Navigation({ url }: { url: URL }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => url.pathname === path;

  return (
    <header className="">
      <nav className="lg:px-24 px-10 mx-auto py-10 flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/medi_logo.png"
            alt="Meditron Logo"
            className="w-16 h-10"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Meditron</h1>
            <p className="text-[clamp(.5rem,1.5vw,.8rem)] text-gray-500">
              Redifining drug accessibility
            </p>
          </div>
        </div>
        {/* links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-gray-700">
          <ul className="flex items-center text-sm space-x-8 lg:space-x-12">
            <li
              className={`hover:text-green-500 ${
                isActive("/") ? "text-green-500" : ""
              }`}
            >
              <a href="/" className="hover:no-underline">
                Home
              </a>
            </li>
            <li
              className={`hover:text-green-500 ${
                isActive("/services") ? "text-green-500" : ""
              }`}
            >
              <a href="/services" className="hover:no-underline">
                Services
              </a>
            </li>
            <li
              className={`hover:text-green-500 ${
                isActive("/about") ? "text-green-500" : ""
              }`}
            >
              <a href="/about" className="hover:no-underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block font-bold text-white py-4 ">
          <Button size="icon" className="flex rounded-sm font-semibold items-center px-20 space-x-2">
            Contact Us
            <ArrowRight size={20} className="font-bold" />
          </Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none fixed top-12 flex items-center right-7 z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-start p-5 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="self-end focus:outline-none fixed top-12 flex items-center right-7 z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex py-5 items-center space-x-4">
          <img
            src="/images/medi_logo.png"
            alt="Meditron Logo"
            className="w-16 h-10"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Meditron</h1>
            <p className="text-[clamp(.5rem,1.5vw,.8rem)] text-gray-500">
              Redifining drug accessibility
            </p>
          </div>
        </div>
        <ul className="flex flex-col mt-10 space-y-10 text-gray-700">
          <li
            className={`hover:text-green-500 ${
              isActive("/") ? "text-green-500" : ""
            }`}
          >
            <a href="/" className="hover:no-underline">
              Home
            </a>
          </li>
          <li
            className={`hover:text-green-500 ${
              isActive("/services") ? "text-green-500" : ""
            }`}
          >
            <a href="/services" className="hover:no-underline">
              Services
            </a>
          </li>
          <li
            className={`hover:text-green-500 ${
              isActive("/about") ? "text-green-500" : ""
            }`}
          >
            <a href="/about" className="hover:no-underline">
              About Us
            </a>
          </li>
        </ul>
        <Button className="flex mt-10 px-16 rounded-sm font-semibold items-center space-x-2">
          Contact Us
          <ArrowRight size={20} className="font-bold" />
        </Button>
      </div>
    </header>
  );
}
