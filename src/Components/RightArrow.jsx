import React from "react";

const RightArrow = () => {
  return (
    <button className="border rounded-[50%] bg-accent h-[55px] w-[55px] flex justify-start">
      <img
        className="scale-50 "
        src="..\src\assets\svg\right-arrow.svg"
        alt=""
      />
    </button>
  );
};

export default RightArrow;
