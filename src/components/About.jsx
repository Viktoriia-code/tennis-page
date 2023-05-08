import { content } from "../Content";

const About = () => {
  const { about } = content;
  return (
    <section className="bg-bg_light_primary" id="about">
      <div className="md:container px-5 pt-12 pb-12 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {about.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {about.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center justify-self-center lg:flex-row flex-col-reverse gap-14">
          <img
            src={about.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[25vw] min-w-[22rem]"
          />
          <div className="max-w-[35vw]">
            <p className="text-lg">{about.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;