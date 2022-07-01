import React from "react";
import Header from "../../components/header/Header";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/bascketSlice";
export default function Index() {
  const items = useSelector(selectItems);
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>{JSON.stringify(items)}</div>
    </div>
  );
}
