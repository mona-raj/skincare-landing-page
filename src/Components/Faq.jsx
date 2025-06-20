import React, { use, useState } from "react";

const Faq = ({ q, a }) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display)
  };

  return (
    <div className="border border-accent rounded-[5px] pt-[3px] pb-[3px] pr-[16px] pl-[16px]">
      <div className="flex justify-between items-center">
        <h3 className="p-0 m-0">{q}</h3>
        <button
          onClick={toggleDisplay}
          className="text-[35px] font-extralight align-top"
        >
          {display == true ? "-" : "+"}
        </button>
      </div>
      {display == true && (
        <p className="text-[0.8em]" id="inside-text">
          {a}
        </p>
      )}
    </div>
  );
};

export default Faq;
