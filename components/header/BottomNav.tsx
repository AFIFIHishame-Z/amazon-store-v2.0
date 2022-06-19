import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
export default function BottomNav() {
  return (
    <div className="hidden md:flex items-center pl-3 p-2 space-x-3 bg-amazon_blue-light text-white text-xs md:text-sm">
      <p className="flex items-center link font-bold">
        <MenuIcon className="h-6 mr-1" />
        <span>All</span>
      </p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="link font-bold">Today's Deal</p>
      <p className="link font-bold">Buy Again</p>
      <p className="link font-bold">Customer Service</p>
      <p className="link font-bold">Gift Cards</p>
      <p className="link font-bold hidden md:inline">Registry</p>
      <p className="link font-bold hidden md:inline">Sell</p>
    </div>
  );
}
