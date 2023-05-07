// import { useEffect } from "react";
import { content } from "../Content"

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.tennis}{" + "}
            <span className="text-dark_primary">{hero.padel}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <div className="flex flex-col gap-4 mb-5">
            <p className="font-Paprika text-3xl">
              {hero.greeting}
            </p>
            <h1>
              {hero.firstName}<br />{hero.lastName}
            </h1>
            <div className="i-title">
              <div className="i-title-wrapper">
              {hero.hero_title.map((content, i) => (
                <h2
                  key={i}
                  className={`font-Paprika text-3xl/[3rem]`}
                >
                  {content}
                </h2>
              ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
