import React from "react";

const ReviewCard = () => {
  return (
    <div className="max-w-[414px] w-full rounded-xl border px-4 py-6 h-full flex flex-col gap-5 shadow-md text-[18px] mx-2 md:mx-0">
      <div>
        <img src="/images/facebook.svg" alt="" />
      </div>

      <span className="font-bold">Michelle Calvert-Moir</span>
      <span className="leadingd-[27] tracking-[0%]">
        GovAccess is easy straight forward and they are with you from start to
        beginning and even after. The service is amazing. Thanks so much
      </span>

      <div className="flex gap-1">
        <img src="/images/start.svg" className="w-[18px] h-[18px]" alt="" />
        <img src="/images/start.svg" className="w-[18px] h-[18px]" alt="" />
        <img src="/images/start.svg" className="w-[18px] h-[18px]" alt="" />
        <img src="/images/start.svg" className="w-[18px] h-[18px]" alt="" />
        <img src="/images/start.svg" className="w-[18px] h-[18px]" alt="" />
      </div>
    </div>
  );
};

export default ReviewCard;
