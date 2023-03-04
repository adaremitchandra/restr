import React from "react";

// import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className="mt-2 flex w-1/2 justify-between rounded bg-green-400 p-2">
        <div className="flex">
          <div className="font-bold text-white">{title}</div>
        </div>
        {/* <div className="flex items-center justify-center">{activeIndex === index ? <BsFillArrowDownCircleFill className="h-8 w-8" /> : <BsFillArrowUpCircleFill className="h-8 w-8" />}</div> */}
      </div>

      {activeIndex === index && <div className="shadow-3xl mb-6 rounded-2xl p-4 shadow-cyan-500/50">{children}</div>}
    </>
  );
};

export default AccordionLayout;
