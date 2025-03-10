import GridCard from "@/components/GridCard";
import NavBar from "@/components/NavBar";
import ReviewCard from "@/components/ReviewCard";
import SocialReview from "@/components/SocialReview";
import Image from "next/image";

export default function Home() {
  const cardData = [
    {
      img: "/images/registration.svg",
      tagText: "Company Registration",
      title: "Make it official",
      description:
        "Start your business in just a few clicks. Receive all the necessary documents for your company directly in your inbox—quick, simple, and hassle-free.",
      reverse: false,
    },

    {
      img: "/images/compliance.svg",
      tagText: "Compliance",
      title: "Stay compliant",
      description:
        "Stay ahead with effortless compliance. GovAccess Compliance™ handles the hard parts, keeps you penalty-free, and makes compliance stress-free.",
      reverse: true,
    },

    {
      img: "/images/bookkeepping.svg",
      tagText: "Bookkeeping",
      title: "Manage finance",
      description: `No more complicated software or costly bookkeepers. GovAccess Books™ lets you send invoices, receive payments, and file taxes—all in one place.`,
      reverse: false,
    },

    {
      img: "/images/taxes.svg",
      tagText: "Taxes",
      title: "Manage finance",
      description: `Filing company tax returns doesn't need to be complicated. GovAccess Tax™ takes care of everything—from start to finish. We simplify taxes so you stay stress-free and penalty-free.`,
      reverse: true,
    },
  ];

  return (
    <main className="bg-white text-textColor h-full w-full">
      <NavBar />

      <section className="container mx-auto pt-24 overflow-auto">
        {/* <div className="flex justify-center mt-12">
          <span className="py-2 px-8 bg-blue-700 text-white rounded-full text-[20.3px]">
            Lorem ipsum v1.0.1
          </span>
        </div> */}

        <div className="mt-7 text-center max-w-[960px] mx-auto w-full flex flex-col gap-6">
          <span className="text-4xl sm:text-6xl px-1 md:px-0 font-bold tracking-[-0.05em] leading-[1.1em]">
            Everything you need to start, run, and grow your company — all in
            one place.
          </span>

          <span className="max-w-[683px] px-2 md:px-0 w-100 mx-auto text-[20.3px] text-[#334155] leading-[32.9px] tracking-[-0.031875em]">
            Start an official company, manage finances, stay compliant, file
            taxes, send invoices, and get paid.
          </span>
        </div>

        <div className="flex justify-center mt-4">
          <button className="text-[18px] px-12 py-6 bg-blue-700 text-white rounded-full">
            Register a company
          </button>
        </div>
        <p className="text-center mt-4">Already have a registered company?</p>

        <img src="/images/UI.svg" className="mx-auto mt-10 mb-4" alt="" />

        <div className="max-w-[762px] mx-auto w-full text-center flex flex-col mt-20">
          <span className="text-4xl sm:text-[55.11px] px-1 md:px-0 font-bold leading-[1.2em]">
            All the essentials, none of the hassle.
          </span>

          <span className="text-[20.3px] my-8 text-center text-[#334155] px-2 md:px-0">
            Your time is valuable. GovAccess takes the hassle out of running
            your business by handling complex tasks like registration and
            compliance and automating the mundane work so you can focus on what
            matters most.
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {cardData.map((data) => (
            <GridCard
              key={data.tagText}
              imageSrc={data.img}
              tagText={data.tagText}
              title={data.title}
              description={data.description}
              reverse={data.reverse}
            />
          ))}
        </div>

        <div className="mt-20 flex flex-col max-w-[709.86px] mx-auto gap-6 mb-6">
          <span className="text-4xl md:text-[54.98px] leading-[1.1em] font-bold text-center">
            Here’s why small business owners ♥️ GovAccess
          </span>

          <span className="leading-[36px] text-center text-[20.3px] tracking-[-0.51px]">
            GovAccess has helped over 100k small business owners in Burundi
            simplify starting their businesses and staying compliant.
          </span>
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-20 mb-9">
          <SocialReview />
          <SocialReview />
        </div>

        <div className="pb-4 flex flex-wrap justify-around gap-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <section className="px-2">
          <div className="my-20 flex flex-col max-w-[906px] py-16 rounded-xl mx-auto bg-customBlue text-white px-4">
            <div className="max-w-[643px] mx-auto text-center">
              <p className="text-4xl font-bold">
                Ready to launch your business?
              </p>

              <p className="mt-7 text-[20.3]">
                Take the first step towards success with GovAccess. Let us
                handle the hard parts, so you can focus on growing your dream
                business.
              </p>
            </div>

            <button className="py-4 px-7 rounded-full bg-white text-customBlue max-w-max mx-auto mt-7">
              Start a company
            </button>

            <p className="text-center mt-7 text-[15.8px]">
              Already have a registered company?
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
