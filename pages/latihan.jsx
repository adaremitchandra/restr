import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";
import { useSwiper } from "swiper/react";
import Image from "next/image";

const latihan = () => {
  // const swiper = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const pagination = {
    clickable: true,
    renderCustom: function (index, className) {
      return '<span className="' + className + ' ">' + (index + 1) + "d</span>";
    },
  };

  return (
    <div className="flex h-[100vh] w-full bg-red-100">
      <Swiper
        // loop
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Navigation, Pagination]}
        className="relative m-auto aspect-[1280/544] w-full bg-sky-300"
      >
        <SwiperSlide>
          <Image src={"https://adaremit.co.id/img/healthcare.265020b6.jpg"} width={1000} height={1000} className="h-full w-full" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src={"https://adaremit.co.id/img/vendor.d4b09ad1.png"} width={1000} height={1000} className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"https://adaremit.co.id/img/education.b0590543.jpg"} width={1000} height={1000} className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"https://adaremit.co.id/img/family.fae3d1e4.jpg"} width={1000} height={1000} className="h-full w-full" />
        </SwiperSlide> */}
        <div className="absolute bottom-10 right-10 z-10 flex gap-10">
          <button ref={navigationPrevRef} className="prev text-4xl font-bold text-white">
            Prev
          </button>
          <button ref={navigationNextRef} className="next text-4xl font-bold text-white">
            next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default latihan;
