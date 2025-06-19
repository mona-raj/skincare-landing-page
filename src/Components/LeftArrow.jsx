import React from "react";

const LeftArrow = () => {
  return (
    <button className="border rounded-[50%] border-accent h-[55px] w-[55px] flex justify-end">
      <img
        className="scale-50"
        src="..\src\assets\svg\left-arrow.svg"
        alt=""
      />
    </button>
  );
};

export default LeftArrow;
