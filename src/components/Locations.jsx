import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Locations = () => {
  const { locations } = content;

  const [data, setData] = useState(0);

  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (buttonId) => {
    setData(buttonId);
    setActiveButton(buttonId);
  };

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
            {locations.locations_content[data].place_image.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={locations.locations_content[data].place_image[i]} alt="..." />
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
                  <li onClick={() => handleClick(0)} className={`inline-block font-Paprika text-2xl px-1 cursor-pointer md:mr-8 md:mx-0 mx-6 md:ml-2 text-[#00233F] ${activeButton === 0 ? 'border-b-2' : ''}`}>Kerava</li>
                  <li onClick={() => handleClick(1)} className={`inline-block font-Paprika text-2xl px-1 cursor-pointer md:mr-8 md:mx-0 mx-6 text-[#00233F] ${activeButton === 1 ? 'border-b-2' : ''}`}>Järvenpää</li>
                  <li onClick={() => handleClick(2)} className={`inline-block font-Paprika text-2xl px-1 cursor-pointer md:mr-8 md:mx-0 mx-6 text-[#00233F] ${activeButton === 2 ? 'border-b-2' : ''}`}>Tuusula</li>
                  <li onClick={() => handleClick(3)} className={`inline-block font-Paprika text-2xl px-1 cursor-pointer md:mr-8 md:mx-0 mx-6 text-[#00233F] ${activeButton === 3 ? 'border-b-2' : ''}`}>Vantaa</li>
                </ul>
                <p className="leading-7 text-lg my-3">{content.locations.locations_content[data].place_address}</p>
                <p className="leading-7 text-lg my-3">{content.locations.locations_content[data].place_puh}</p>
                <p className="leading-7 text-lg my-3">{content.locations.locations_content[data].place_num_kenttä}</p>
                <p className="leading-7 text-lg my-3">{content.locations.locations_content[data].place_price}</p>
              </div>
            </div>
          </div>
    </section>
  );
};

export default Locations;