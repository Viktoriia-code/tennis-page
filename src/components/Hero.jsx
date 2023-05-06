import { content } from "../Content"

const Hero = () => {
  const { hero } = content;
  return <section>
    <div className="min-h-screen relative">
      <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 bg-primaryLinear"></div>
      <h1>
        {hero.firstName}
        <span>{hero.LastName}</span>
      </h1>
    </div>
  </section>;
};

export default Hero;
