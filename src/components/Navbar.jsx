import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex py-2 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between max-w-7xl items-center mx-auto">
        <Link
          to="/"
          className="items-center gap-2 block"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="./assets/logo.svg"
            alt="logo"
            className="w-full h-9 object-contain"
          />
          <p className="hidden sm:block font-bold">Diluka Wijesinghe</p>
        </Link>
        <ul className="sm:flex flex-row gap-10 hidden list-none">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium text-[16px] cursor-pointer `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "./assets/close.svg" : "./assets/menu.svg"}
            alt="logo"
            className="object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-10 right-0 mx-4 min-w-[150px] rounded-xl z-10 my-2`}
          >
            <ul className="flex flex-col gap-4 items-start justify-start list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white font-medium text-[16px] cursor-pointer `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
