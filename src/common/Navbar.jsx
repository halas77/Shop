import React , {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="shadow-lg flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        {" "}
        Yene fashion{" "}
      </h1>
      <ul className="hidden font-bold md:flex">
        {Links.map((link) => (
          <li key={link.name} className="p-4">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <ul className="p-4">
          {Links.map((link) => (
            <li key={link.name} className="p-4 border-b border-gray-900">
              <a href={link.link} className="uppercase">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
