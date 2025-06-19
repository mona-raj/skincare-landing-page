import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border rounded-[100px] border-accent bg-primary text-accent pt-[8px] pb-[8px] pl-[16px] pr-[16px]">
      {text}
    </button>
  );
};

export default Button;
