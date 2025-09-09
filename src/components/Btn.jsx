import React from "react";

const Btn = ({ text}) => {
  return (
    <div>
      <button className="text-slate-50 tracking-wide shadow-md text-shadow-md px-4 py-2 font-semibold text-sm rounded-lg bg-[#2679f3] hover:bg-[#2262c7] cursor-pointer duration-200">{text}</button>
    </div>
  );
};

export default Btn;
