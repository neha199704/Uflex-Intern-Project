import joyfulWomen from "../assets/joyfulWomen.svg";
import basketBall from "../assets/basketBall.svg";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import crossSign from "../assets/crossSign.svg";
import settings from "../assets/settings.svg";
import downloads from "../assets/downloads.svg";
import logout from "../assets/logout.svg";
import divprofile from "../assets/divprofile.svg";
import help from "../assets/help.svg";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOnScreen = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOnScreen);
    return () => {
      document.removeEventListener("mousedown", handleClickOnScreen);
    };
  });

  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div className="flex items-center justify-center">
        <img src={joyfulWomen} alt="joyfulWomen" />
        <img src={basketBall} alt="" className="self-end ml-[-9px] mr-2" />
        <h6 className="sansita-extrabold-italic  leading-[16.31px] mt-4   text-center  text-xm  text-white">
          ATHLETE’S <br /> ACADEMY
        </h6>
      </div>

      <nav className="flex items-center gap-10 ">
        <a
          href="#home"
          className="font-inter text-[16px] font-extrabold leading-[19.36px] cursor-pointer hover:text-[#e8e7e7] z-20 text-white "
        >
          Home
        </a>
        <a
          href="#category"
          className=" font-inter text-[16px] font-extrabold leading-[19.36px] cursor-pointer hover:text-[#e8e7e7] z-20 text-white"
        >
          Category
        </a>
        <a
          href="#blogs"
          className="font-inter text-[16px] font-extrabold leading-[19.36px] cursor-pointer hover:text-[#e8e7e7] z-20 text-white"
        >
          Blogs
        </a>
        <a
          href="#wallet"
          className="font-inter text-[16px] font-extrabold leading-[19.36px]cursor-pointer  hover:text-[#e8e7e7] z-20  text-white"
        >
          Wallet
        </a>
        <button className="cursor-pointer  z-20">
          <img src={search} alt="search" />
        </button>
      </nav>
      <div>
        <img src={profile} alt="Profile" onClick={toggleProfile} />
        {isProfileOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-[6.2rem] top-[3.9rem] w-[270.15px]  border-solid border-[1px] border-[#000000C2] bg-white shadow-lg rounded-lg  z-10"
          >
            <div className="absolute left-[15rem] pt-2 cursor-pointer ">
              <img
                src={crossSign}
                alt="crossSign"
                onClick={() => {
                  setIsProfileOpen(false);
                }}
              />
            </div>
            <div className="flex items-center h-24 gap-4 mt-1 p-4">
              <img
                src={profile}
                alt="User"
                className="w-16 h-16 rounded-full mt-2"
              />
              <div className="flex justify-start flex-col">
                <h3 className="font-roboto text-[20px] font-bold self-start leading-[23.44px] mb-2 text-center text-black">
                  Loretta Milla
                </h3>

                <p className="font-roboto text-[14px] font-bold leading-[16.41px] text-center text-[#000000A3]">
                  Example@gmail.com
                </p>
              </div>
            </div>
            <hr className=" h-[2px] bg-[#201B1B85] border-none" />

            <ul className="mt-4  space-y-2 p-4">
              <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                <div className="flex gap-5 items-center ">
                  <img
                    src={divprofile}
                    alt="divprofile"
                    className="w-[32px] h-[32px]"
                  />{" "}
                  <p className="font-roboto text-[20px] font-bold leading-[22.44px] text-center text-[#00000085]">
                    Profile
                  </p>
                </div>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                <div className="flex gap-5  items-center">
                  <img
                    src={downloads}
                    alt="downloads"
                    className="w-[32px] h-[32px]"
                  />{" "}
                  <p className="font-roboto text-[20px] font-bold leading-[22.44px]  text-center text-[#00000085]">
                    Downloads
                  </p>
                </div>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                <div className="flex gap-5 items-center ">
                  <img
                    src={settings}
                    alt="setting"
                    className="w-[32px] h-[32px]"
                  />{" "}
                  <p className="font-roboto text-[20px] font-bold leading-[22.44px]  text-center text-[#00000085]">
                    Settings
                  </p>
                </div>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">
                <div className="flex gap-5 items-center">
                  <img src={help} alt="help" className="w-[32px] h-[32px]" />{" "}
                  <p className="font-roboto text-[20px] font-bold leading-[22.44px]  text-center  text-[#00000087]">
                    Help
                  </p>
                </div>
              </li>
            </ul>
            <hr className=" h-[1px] bg-[#161414D1] border-none" />

            <div className="hover:bg-gray-100 p-2 m-2 pl-[18px]  rounded-md cursor-pointer">
              <div className="flex gap-5 items-center ">
                <img src={logout} alt="logout" className="w-[32px] h-[32px]" />{" "}
                <p className="font-roboto text-[20px] font-bold leading-[22.44px]  text-center text-[#0000009C]">
                  Log out
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
