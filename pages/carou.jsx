import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carou = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="container h-screen bg-sky-200">
      <div className="pt-10">
        <Carousel
          responsive={responsive}
          infinite
          //   className="bg-slate-300"
        >
          <div className=" ">
            <Image src="/bisnis.png" width={500} height={300} alt="Image" draggable="false" className="h-auto w-full" />
            <h5>Web Development</h5>
          </div>
          <div className=" ">
            <Image src="/bisnis.png" width={500} height={300} alt="Image" draggable="false" className="h-auto w-full" />
            <h5>Brand Identity</h5>
          </div>
          <div className=" ">
            <Image src="/bisnis.png" width={500} height={300} alt="Image" draggable="false" className="h-auto w-full" />
            <h5>Logo Design</h5>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default carou;
