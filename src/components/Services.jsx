// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Services = () => {
  const { services } = content;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="services">

       {/* modal */}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <p>{selectSkill?.desc}</p>

        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] sm:cursor-pointer relative group cursor-pointer border-2
               border-slate-200 rounded-xl text-center
               bg-bg_light_primary p-6 flex-1 hover:drop-shadow-primary duration-200"
              onClick={() => {
                setSelectSkill(content);
                openModal();
              }}
            >
              <img src={content.logo} alt="..." className="mx-auto w-20 group-hover:scale-125 duration-200" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
              {createElement(services.icon, {className: "w-5 h-5 absolute top-5 right-5"})}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
