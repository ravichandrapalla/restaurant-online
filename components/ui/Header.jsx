"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import AccountComponent from "../AccountComponent";

const NavLinks = [
  { name: "HOME", path: "/" },
  { name: "DISHES", path: "/dishes" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  console.log("header is rendering");
  return (
    <header className="h-22 flex items-center justify-around shadow-lg ">
      <Image alt="logo" src="/Logo.svg" height={70} width={70} />
      <ul className="list-none flex gap-x-4 text-base font-semibold">
        {Array.isArray(NavLinks) &&
          NavLinks.map((link) => (
            <li key={link.name} className="cursor-pointer">
              <Link href={link.path}>{link.name?.toLocaleUpperCase()}</Link>
            </li>
          ))}
      </ul>
      <div className=" flex gap-x-4 text-white">
        <div className="bg-[#2A435D] w-10 h-10 flex items-center justify-center rounded-4xl relative">
          <div className="absolute text-xs z-50 top-[-10] left-[-10]  w-6 h-6 rounded-4xl flex items-center justify-center">
            2
          </div>
          <FaCartShopping size={22} color="white" />
        </div>
        <article className="flex items-center justify-between gap-x-2">
          <div className="flex flex-col">
            <span className="text-sm">Delivery Order</span>
            <span className="text-xs">+91 9999999999</span>
          </div>

          <Image src="/Scooter_Logo.svg" alt="scooter" height={23} width={23} />
        </article>
      </div>
      <AccountComponent />
    </header>
  );
};

export default Header;
