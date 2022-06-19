import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

export default function Header() {
  return (
    <header>
      <div>
        <TopNav />
      </div>
      <div>
        <BottomNav />
      </div>
    </header>
  );
}
