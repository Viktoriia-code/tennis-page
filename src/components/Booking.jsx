import { content } from "../Content";

const Booking = () => {
  const { booking } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {booking.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {booking.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={booking.booking_image}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{booking.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {booking.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;