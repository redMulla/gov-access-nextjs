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
      className={`grid grid-cols-2 gap-4 mb-6 ${
        reverse
          ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          : ""
      }`}
    >
      {/* Image Section */}
      <div className="md:p-14 p-10 col-span-2 md:col-span-1">
        <img src={imageSrc} className="w-full h-auto" alt="" />
      </div>

      {/* Content Section */}
      <div className="col-span-2 md:col-span-1 flex align-center">
        <div
          className={`flex flex-col gap-5 my-auto w-full text-center md:text-start ${
            reverse
              ? "md:text-end md:ml-auto md:pe-10 md:ps-4"
              : "md:ps-10 md:pe-4"
          }`}
        >
          {/* Tag */}
          <span
            className={`rounded-lg bg-gray-100 py-2 px-4 text-[15.8px] mx-auto md:mx-0 ${
              reverse ? "md:ml-auto" : ""
            }`}
            style={{ width: "max-content" }}
          >
            {tagText}
          </span>

          {/* Title and Description */}
          <div className="max-w-[486px] mt-4 mx-auto md:mx-0">
            <p className="text-[27.86px] font-bold">{title}</p>
            <p className="text-[18px] mt-2">{description}</p>

            {/* Button */}
            <button className="py-4 px-8 bg-blue-600 rounded-full text-white text-[15.8px] mt-8 mx-auto md:mx-0">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
