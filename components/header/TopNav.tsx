import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

export default function TopNav() {
  return (
    <div className="bg-amazon_blue p-1 flex-grow py-2 px-3 md:px-0">
      <div className="flex items-center  ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 cursor-pointer">
          <MenuIcon className="h-12 mr-1 relative -top-2 md:hidden inline text-white" />
          <Image
            src={"https://links.papareact.com/f90"}
            width={150}
            height={40}
            objectFit={"contain"}
            alt={"Amazon logo"}
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center mx-6 space-x-6 whitespace-nowrap text-xs">
          <div className="link hidden md:inline">
            <p>Hello AFIFI Hishame</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link hidden md:inline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="flex items-center link relative">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center font-bold text-black rounded-full">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex items-center mt-2 h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input
          type="text"
          className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
        />
        <SearchIcon className="h-12 p-4" />
      </div>
    </div>
  );
}
