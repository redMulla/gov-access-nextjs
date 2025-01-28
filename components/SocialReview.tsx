import React from "react";

const SocialReview = () => {
  return (
    <div>
      <div className="py-4 px-4 border shadow-lg flex max-w-max rounded-full gap-2 text-[18px] tracking-[0%] align-middle">
        <div className="flex gap-1">
          <img src="/images/start.svg" className="h-[27px] w-[27px]" alt="" />
          <img src="/images/start.svg" className="h-[27px] w-[27px]" alt="" />
          <img src="/images/start.svg" className="h-[27px] w-[27px]" alt="" />
          <img src="/images/start.svg" className="h-[27px] w-[27px]" alt="" />
          <img src="/images/start.svg" className="h-[27px] w-[27px]" alt="" />
        </div>
        <img
          src="/images/google.svg"
          className="h-[27px] mx-auto w-[27px]"
          alt=""
        />
        <span className="font-bold">2000+</span>
        <span>reviews</span>
      </div>
    </div>
  );
};

export default SocialReview;
