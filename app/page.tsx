import GridCard from "@/components/GridCard";
import NavBar from "@/components/NavBar";
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

      <section className="container mx-auto pt-20 overflow-auto">
        <div className="flex justify-center mt-20">
          <button className="py-2 px-8 bg-blue-700 text-white rounded-full text-[20.3px]">
            Lorem ipsum v1.0.1
          </button>
        </div>

        <div className="mt-7 text-center max-w-[960px] mx-auto w-full flex flex-col gap-6">
          <span className="text-6xl font-bold leading-[81px]">
            Everything you need to start, run, and grow your company — all in
            one place.
          </span>

          <span className="max-w-[683px] w-100 mx-auto text-[20.3px] text-[#334155] leading-[32.9px]">
            Start an official company, manage finances, stay compliant, file
            taxes, send invoices, and get paid.
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-[18px] px-12 py-6 bg-blue-700 text-white rounded-full">
            Register a company
          </button>
        </div>
        <p className="text-center mt-8">Already have a registered company?</p>

        <img src="/images/UI.svg" className="mx-auto mt-10 mb-4" alt="" />

        <div className="max-w-[762px] mx-auto w-full text-center flex flex-col mt-20">
          <span className="text-[55.11px] font-bold leading-[67.5px]">
            All the essentials, none of the hassle.
          </span>

          <span className="text-[20.3px] my-8 text-center text-[#334155]">
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
      </section>
    </main>
  );
}
