import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const About = () => {
  const { about } = content;
  return (
    <section className="bg-bg_light_primary" id="about">
      <div className="md:container flex items-start lg:flex-row flex-col-reverse gap-5 px-5 pt-16 pb-16">
          <div className="max-w-[45vw] min-w-[22rem]">
            <div>
              <h2 className="title" data-aos="fade-down">
                {about.title}
              </h2>
              <h4 className="subtitle" data-aos="fade-down">
                {about.subtitle}
              </h4>
              <br />
            </div>
            <p className="text-lg">{about.text}</p>
            <div className="flex flex-col gap-10 mt-10">
            {about.about_education.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-140 gap-5`}
              >
                <img src={content.school_logo} className="w-20" alt="" />
                <div>
                  <p className="text-lg">{content.course_name}</p>
                  <h6>{content.school_title}</h6>
                </div>
              </div>
            ))}
            </div>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-12 max-w-xs drop-shadow-primary self-start"
          >
            {about.about_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
    </section>
  );
};

export default About;