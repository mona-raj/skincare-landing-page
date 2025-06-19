import React from "react";

const DotBtn = ({text}) => {
  return (
    <button className="border rounded-[100px] border-accent bg-primary text-accent pt-[8px] pb-[8px] pl-[16px] pr-[16px] self-start">
      <span className="border rounded-[50%] border-accent bg-accent h-[12px] w-[12px] inline-block mr-[12px]"></span>
      {text}
    </button>
  );
};

export default DotBtn;
