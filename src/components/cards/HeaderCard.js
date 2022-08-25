import React from "react";

const HeaderCard = ({props}) => {
  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md md:dark:bg-[#0A96FF] md:dark:border-[#0A96FF] hover:bg-[#00A59C]">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col md:items-center pb-10 mx-3">
          <img
            className="mb-3 w-14 h-14 rounded-full shadow-lg float-left md:mx-auto ml-4"
            src={props.url}
            alt={props.title}
          />
          <h5 className="mb-1 text-xl font-medium text-[#1F3D9D] md:text-[#FFFFFF] md:dark:text-white md:text-center">
            {props.title}
          </h5>
          <span className="text-sm text-[#333333] md:dark:text-[#F8F8F8] md:text-center">
            {props.info}
          </span>
          {/* <div className="flex mt-4 space-x-3 md:mt-6"></div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
