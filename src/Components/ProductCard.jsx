import React from "react";

const ProductCard = ({ imgUrl, text, price }) => {
  return (
    <div className="relative">
      <img src={imgUrl} alt="" />
      <div className="rounded-[10px] bg-primary text-accent absolute z-1 bottom-4 left-4.5 min-w-[90%] max-h-[15%] flex justify-between p-[10px]">
        <div className="leading-none font-light flex flex-col justify-between gap-3">
          <p>{text}</p>
          <p className="text-[#2D3B3680] text-[0.75em]">{price}</p>
        </div>
        <img
          className="rounded-[10px] bg-[#2D3B361A] inline-block p-4"
          src="..\src\assets\svg\cart.svg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProductCard;
