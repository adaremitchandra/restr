import { Disclosure } from "@headlessui/react";
import React from "react";
import Min from "../public/Min.svg";
import Plus from "../public/Plus.svg";

const Accordion = ({ title, content, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => activeIndex !== index && setActiveIndex(index);

  return (
    <Disclosure as="div" className="w-full border-b-2 border-[#BCE3EA] bg-white">
      <>
        <Disclosure.Button onClick={() => handleSetIndex(index)} className="flex w-full flex-row justify-between gap-5 px-11 py-5 text-xl font-semibold text-[#006AA6] ">
          <div className="flex-1 text-left">{title}</div>
          {activeIndex === index ? <Min /> : <Plus />}
        </Disclosure.Button>
        <Disclosure.Panel static className={`overflow-hidden  ${activeIndex === index ? "max-h-[2000px] duration-[600ms]" : "max-h-0 duration-[150ms]"} transition-all ease-in-out`}>
          <div className="mx-5 bg-[#fafafa] py-5 px-6 pr-28 text-lg font-medium text-gray-500">{content}</div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};

export default Accordion;
