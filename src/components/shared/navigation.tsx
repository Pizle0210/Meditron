import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Navigation({ url }: { url: URL }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => url.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-200">
      <nav className="mx-auto flex w-full items-center justify-between px-10 py-10 xl:px-20">
        {/* logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/medi_logo.png"
            alt="Meditron Logo"
            className="h-10 w-16"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Meditron</h1>
            <p className="text-[clamp(.5rem,1.5vw,.8rem)] text-gray-500">
              Redefining drug accessibility
            </p>
          </div>
        </div>
        {/* links */}
        <div className="hidden items-center space-x-8 text-gray-700 md:flex lg:space-x-12">
          <ul className="flex items-center space-x-8 text-sm lg:space-x-12">
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
        <div className="hidden py-4 font-bold text-white md:block">
          <Button
            size="icon"
            className="flex items-center space-x-2 rounded-sm px-20 font-semibold"
          >
            Contact Us
            <FaLongArrowAltRight size={20} className="font-bold" />
          </Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="fixed top-12 right-7 z-50 flex items-center focus:outline-none"
          >
            <svg
              className="h-6 w-6"
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
        className={`fixed top-0 left-0 z-50 flex h-screen w-full transform flex-col items-start bg-white p-5 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="fixed top-12 right-7 z-50 flex items-center self-end focus:outline-none"
        >
          <svg
            className="h-6 w-6"
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
        <div className="flex items-center space-x-4 py-5">
          <img
            src="/images/medi_logo.png"
            alt="Meditron Logo"
            className="h-10 w-16"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Meditron</h1>
            <p className="text-[clamp(.5rem,1.5vw,.8rem)] text-gray-500">
              Redefining drug accessibility
            </p>
          </div>
        </div>
        <ul className="mt-10 flex flex-col space-y-10 text-gray-700">
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
        <Button className="mt-10 flex items-center space-x-2 rounded-sm px-16 font-semibold">
          Contact Us
          <FaLongArrowAltRight size={20} className="font-bold" />
        </Button>
      </div>
    </header>
  );
}
