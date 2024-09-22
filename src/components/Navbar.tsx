"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900  z-10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Chill Chats
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-gray-800 dark:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-800 dark:text-gray-200">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 dark:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 dark:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mode Toggle */}
        <div className="hidden md:block">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {navOpen ? (
            <AiOutlineClose
              size={30}
              className="cursor-pointer text-gray-800 dark:text-gray-200"
              onClick={handleToggle}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer text-gray-800 dark:text-gray-200"
              onClick={handleToggle}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center absolute w-full bg-white dark:bg-gray-900  py-8 space-y-6 top-16 transition-all duration-500 ease-in-out transform h-screen ${
          navOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={handleToggle}
          className="text-gray-800 dark:text-gray-200"
        >
          Home
        </Link>
        <Link
          href="/blog"
          onClick={handleToggle}
          className="text-gray-800 dark:text-gray-200"
        >
          Blog
        </Link>
        <Link
          href="/about"
          onClick={handleToggle}
          className="text-gray-800 dark:text-gray-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={handleToggle}
          className="text-gray-800 dark:text-gray-200"
        >
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
