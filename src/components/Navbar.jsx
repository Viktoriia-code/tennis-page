import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-2 left-2 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed top-0 h-[100%] z-[998] flex flex-col items-center gap-5 bg-slate-200/60 px-3 py-3 pt-[84px]
        backdrop-blur-md text-dark_primary duration-300 ${
          showMenu ? "left-0 duration-300" : "duration-300 left-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;