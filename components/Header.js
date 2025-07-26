"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleList = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between bg-flashwhite text-black px-6 py-4">
        {/* Left - Title */}
        <h1 className="uppercase tracking-widest text-xl font-anton">Mini Blog</h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex font-light items-center space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/new-post" className="hover:underline">Create New</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <FiMenu size={24} onClick={handleList} />
        </div>
      </div>

      {/* Mobile Menu List */}
      {showMenu && (
        <div className="lg:hidden w-full flex flex-col items-center bg-white text-black h-[70px] justify-center space-y-1 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/new-post" className="hover:underline">Create New</Link>
        </div>
      )}
    </>
  );
};

export default Header;
