"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Input } from "./ui/input";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    // This variable is to operate the shifting of Navbar from lg to md and sm
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex justify-between items-center h-24 lg:h-32 max-w-[1240px] mx-auto px-8 lg:px-0">
        <div>
          <Link href={"/"}>
            <Image src={"/Logo.webp"} alt="logo" width={150} height={150} />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/female">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Female
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/male">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Male
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kids">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kids
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/allProducts">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    All Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center hidden lg:flex">
          <Search className="bg-white rounded-l" />
          <Input
            type="text"
            placeholder="What you are looking for"
            className="rounded-xl w-96"
          />
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute bg-red-500 rounded-full text-red px-2 py-1 text-xs -top-2 left-5 text-white">
            0
          </div>
          <div className="bg-[#F1F1F1] rounded-full p-2">
            <ShoppingCart />
          </div>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] h-screen bg-white p-10"
              : "fixed left-[-100%] top-0 p-10"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <Link href={"/"} onClick={() => setNav(false)}>
                <Image src={"/Logo.webp"} alt="logo" width={150} height={150} />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-28 flex flex-col items-center text-center">
            <ul>
              <Link href="/">
                <div className="relative">
                  <div className="absolute bg-red-500 rounded-full text-red px-2 py-1 text-xs -top-2 left-11 text-white">
                    0
                  </div>
                  <div className="bg-[#F1F1F1] p-2 rounded-full text-center mx-6">
                    <ShoppingCart />
                  </div>
                </div>
              </Link>
              <Link href="/female">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Female
                </li>
              </Link>
              <Link href="/male">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Male
                </li>
              </Link>
              <Link href="/kids">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Kids
                </li>
              </Link>
              <Link href="/allProducts">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  All Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
