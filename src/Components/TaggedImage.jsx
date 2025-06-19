import React from "react";

const TaggedImage = ({ imgUrl, tagUrl, text }) => {
  return (
    <div className="relative flex">
      <img src={imgUrl} alt="" />
      <div className="rounded-[100px] bg-secondary text-accent pt-[8px] pb-[8px] pl-[16px] pr-[16px] absolute z-1 bottom-6 left-28 max-w-[55%] flex items-center">
        <div className="p-1 border border-accent rounded-[50%] border-dashed inline-block mr-[12px]">
          <img
            className="border rounded-[50%] border-accent bg-accent p-2 inline-block "
            src={tagUrl}
            alt=""
          ></img>
        </div>
        <p className="inline-block leading-none font-light">{text}</p>
      </div>
    </div>
  );
};

export default TaggedImage;
