import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Locations = () => {
  const { locations } = content;

  return (
    <section id="locations">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {locations.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {locations.subtitle}
        </h4>
        <br />
        <div
          data-aos="fade-up"
          className="md:container flex justify-between flex-wrap items-start lg:flex-row flex-col-reverse gap-5
          min-w-[16rem] relative text-center p-6 duration-200"
          >
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-12 max-w-xs drop-shadow-primary self-start"
          >
            {locations.locations_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.place_image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
              <div className="max-w-[45vw] min-w-[30rem] w-[60%]">
                <ul className="pb-4">
                  <li className="inline-block font-Paprika text-xl cursor-pointer md:mr-8 md:mx-0 mx-6 md:ml-2 border-b-2">Kerava</li>
                  <li className="inline-block font-Paprika text-xl cursor-pointer md:mr-8 md:mx-0 mx-6">Järvenpää</li>
                  <li className="inline-block font-Paprika text-xl cursor-pointer md:mr-8 md:mx-0 mx-6">Tuusula</li>
                  <li className="inline-block font-Paprika text-xl cursor-pointer md:mr-8 md:mx-0 mx-6">Sipoo</li>
                </ul>
                <h6 className="my-3">{content.place_title}</h6>
                <p className="leading-7">{content.place_address}</p>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Locations;