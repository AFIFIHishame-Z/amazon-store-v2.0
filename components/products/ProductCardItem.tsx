import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { addToBasket } from "../../slices/bascketSlice";
const MAX_RATING = 5;

const MIN_RATING = 1;

export default function ProductCardItem({
  id,
  title,
  price,
  description,
  category,
  image,
}: any) {
  const dipsatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addToBasketFunc = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dipsatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div>
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          alt={title}
        />
      </div>
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {/* {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))} */}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <div>
        <button className="mt-auto button" onClick={addToBasketFunc}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}
