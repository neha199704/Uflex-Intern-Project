import React from "react";
import backwardArrow from "../assets/backwardArrow.svg";
import { Link } from "react-router-dom";

const ArrowButtons = ({
  bgButton,
  forwardArrowSrc,
  top,
  linkBackward,
  linkForward,
}) => {
  return (
    <div
      className={`w-[200px] h-[114px] relative left-[1431px] ${top} flex items-center gap-4`}
    >
      <Link to={linkBackward}>
        <button
          className={`${bgButton} w-[80px] h-[80px] border-solid border-[1px] border-[#00000078] rounded-full flex items-center justify-center shadow-md `}
        >
          <img src={backwardArrow} />
        </button>
      </Link>
      <Link to={linkForward}>
        <button className="bg-white w-[80px] h-[80px]  border-solid border-[1px] border-[#00000078]  rounded-full flex items-center justify-center shadow-md ">
          <img src={forwardArrowSrc} />
        </button>
      </Link>
    </div>
  );
};

export default ArrowButtons;
