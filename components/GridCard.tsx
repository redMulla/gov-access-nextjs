import React from "react";

interface GridCardProps {
  imageSrc: string;
  tagText: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const GridCard = ({
  imageSrc,
  tagText,
  title,
  description,
  reverse = false,
}: GridCardProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-4 ${
        reverse ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ""
      }`}
    >
      <div className="md:p-14 p-10 col-span-2 md:col-span-1">
        <img src={imageSrc} className="w-full h-auto" alt="" />
      </div>
      <div className="col-span-1 flex align-center">
        <div
          className={`flex flex-col gap-5 my-auto ${
            reverse ? "text-end ml-auto pe-10 ps-4" : "ps-10 pe-4"
          }`}
        >
          <span
            className={`rounded-lg bg-gray-100 py-2 px-4 text-[15.8px] ${
              reverse ? "md:text-end ml-auto" : "md:text-start"
            }`}
            style={{ width: "max-content" }}
          >
            {tagText}
          </span>

          <div className="max-w-[486px] mt-4">
            <p className="text-[27.86px] font-bold">{title}</p>
            <p className="text-[18px] mt-2">{description}</p>

            <button className="py-4 px-8 bg-blue-600 rounded-full text-white text-[15.8px] mt-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
