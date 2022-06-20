import React from "react";
import ProductCardItem from "./ProductCardItem";

export default function ProductFeed({ products }: { products: any }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }: any) => (
          <ProductCardItem
            Key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="md:col-span-full mx-auto"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2 ">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }: any) => (
            <ProductCardItem
              Key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }: any) => (
          <ProductCardItem
            Key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}
