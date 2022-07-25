import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";

function Skills() {
  const imageList = [
    {
      src: "/assets/html.svg",
    },
    {
      src: "/assets/css.svg",
    },
    {
      src: "/assets/js.svg",
    },
    {
      src: "/assets/react.svg",
    },
    {
      src: "/assets/next.svg",
    },
    {
      src: "/assets/vue.svg",
    },
    {
      src: "/assets/bootstrap.svg",
    },
    {
      src: "/assets/antd.svg",
    },
    {
      src: "/assets/tailwind.svg",
    },
    {
      src: "/assets/valorant.svg",
    },
  ];
  return (
    <>
      <h3 className="font-medium text-primary underline text-xl text-center">
        Skills
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mt-5"
      >
        {imageList.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="block">
              <Image
                src={item.src}
                layout="responsive"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Skills;
