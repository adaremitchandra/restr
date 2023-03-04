import React from "react";

// import item1 from "../assets/carousel/1.png";
// import item2 from "../assets/carousel/2.png";
// import item3 from "../assets/carousel/3.png";
// import item4 from "../assets/carousel/4.png";
// import item5 from "../assets/carousel/5.png";

const Item = ({ data }) => {
  return <div className="m-4 h-20 w-20 bg-red-100">{data}</div>;
};

const Scroll = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="overflowx-hidden relative m-auto  w-full bg-sky-100">
          <div className="absolute left-0 flex animate-marquee-infinite bg-green-200">
            <div className="flex w-full  justify-around bg-yellow-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
            </div>
            <div className="flex w-full justify-around ">
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
              {[1, 2, 3, 4, 5].map((item) => (
                <Item data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scroll;
