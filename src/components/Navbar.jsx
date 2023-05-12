import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <aside className={`fixed z-[999] bg-slate-200/60 backdrop-blur-md left-0 min-h-screen ${
      showMenu ? "w-64" : "w-16"
    } duration-500`}>
      <div
        className="sm:cursor-pointer fixed top-2 left-2 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`relative top-0 h-[100%] z-[998] flex flex-col gap-4 px-2 pb-3 pt-[74px]
        text-dark_primary duration-500`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer flex items-center gap-3 group duration-300
     ${i === active && "bg-dark_primary text-white"} ${
      item?.margin && "mt-5"}
    }`}
          >
            <div>{createElement(item?.icon, { size: "28" })}</div>
            <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-300 text-inherit text-2xl ${
                  !showMenu && "opacity-0 translate-x-28 overflow-hidden pl-4"
                }`}
              >
                {item?.title}
            </h2>
            <h2
                className={`${
                  showMenu && "hidden"
                } absolute font-Poppins left-48 bg-white font-semibold whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden text-2xl group-hover:px-2
                group-hover:py-1 group-hover:left-[3.9rem] group-hover:duration-300 group-hover:w-fit  `}
              >
                {item?.title}
              </h2>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;