import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
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
          <span className="text-[66.6px] font-bold leading-[81px]">
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
      </section>
    </main>
  );
}
