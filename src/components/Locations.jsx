// import content
//import { createElement } from "react";
import { content } from "../Content";

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
        {/*<div className="flex gap-5 justify-between flex-wrap">
          {locations.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] sm:cursor-pointer relative group cursor-pointer border-2
               border-slate-200 rounded-xl text-center
               bg-bg_light_primary p-6 flex-1 hover:drop-shadow-primary duration-200"

            >
              <img src={content.logo} alt="..." className="mx-auto w-20 group-hover:scale-125 duration-200" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
              {createElement(locations.icon, {className: "w-5 h-5 absolute top-5 right-5"})}
            </div>
          ))}
          </div>*/}
      </div>
    </section>
  );
};

export default Locations;