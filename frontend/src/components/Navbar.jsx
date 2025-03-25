import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { IoChevronBack } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium w-full">
      <Link to="/">
        <img src={assets.LogoNew} className="w-35 ml-0"/>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-slate-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 group relative"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        <IoSearchSharp
          onClick={() => setShowSearch(true)}
          // src={assets.search_icon}
          className="w-6 cursor-pointer h-6"
        />

        <div className="group relative">
          <MdOutlineAccountCircle 
            onClick={() => (token ? null : navigate("/login"))}
            className="w-6 cursor-pointer h-6"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-gray-900">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-gray-900">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <IoBagRemoveOutline className="w-6 h-6 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-900 text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <RiMenu2Fill 
          onClick={() => setVisible(true)}
          // src={assets.menu_icon}
          className="w-5 h-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-slate-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoChevronBack className="h-4" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-1"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-1"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-1"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-1"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
