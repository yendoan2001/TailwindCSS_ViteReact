import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import NavItems from "./NavItems";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { label: "Home", icon: <AiOutlineHome size="2rem" />, active: true },
    { label: "Movies", icon: <BiMoviePlay size="2rem" /> },
    { label: "About", icon: <IoMdInformationCircleOutline size="2rem" /> },
  ];
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="flex mx-4 justify-between items-center md:block">
        <h4 className="uppercase text-2xl font-bold text-primary py-4 border-b border-primary text-right">
          Phimmoi.net
        </h4>
        <AiOutlineMenu
          className="cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <ul className={`md:block ${isMenuOpen ? "" : "hidden"}`}>
        <NavItems items={items} />
      </ul>
    </nav>
  );
};
export default Nav;
