import React, { useEffect } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import {
  handelAuthStateChanged,
  signOutUser,
} from "../../firebase/authService";
import { closeToggle } from "../../store/navbar/headerSlice";
import "./style.css";
import MobileHeader from "./MobileHeader";
import SearchBox from "./SearchBox";
import Hamburger from "./Hamburger";
import { FaSignOutAlt } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.loginSignup.userData);
  const searchbarStates = useSelector(
    (state) => state.header.searchbarToggleState
  );
  const hamburgerStates = useSelector(
    (state) => state.header.toggleHamburgerState
  );

  useEffect(() => {
    handelAuthStateChanged(navigate, dispatch);
  }, []);

  const handelSignOut = () => {
    signOutUser(navigate);
  };

  const handelOnClickSearch = () => {
    if (searchbarStates) {
      return;
    }
    dispatch(closeToggle());
  };

  return (
    <>
      <div
        className={` ${
          hamburgerStates
            ? "fixed z-20 top-0 bg-[#020C1B]  ssm:bg-opacity-30 h-fit w-full"
            : "fixed z-20 top-0 inset-0 bg-black bg-opacity-30 h-fit w-full"
        }`}
      >
        <ContentWrapper>
          <div className="  py-3  w-full flex justify-between">
            <div className=" flex items-center gap-3">
              <span className="w-[40px] ">
                <img src={logo} alt="" />
              </span>
              <span className="flex items-center">
                <h1
                  className="text-3xl gradient-text   font-bold"
                  style={{
                    clipPath: "clip-path: polygon(0% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  MOVIX
                </h1>
                <img
                  src="https://icons.iconarchive.com/icons/jommans/ladybug/128/File-Movie-icon.png"
                  className="w-[40px]  "
                />
              </span>
            </div>
            {user && (
              <>
                <div className="hidden ssm:flex items-center gap-5 ">
                  <ul className="text-white flex gap-5  text-xl">
                    <li>Home</li>
                  </ul>
                  <span>
                    <IoIosSearch
                      className="text-white text-2xl"
                      onClick={handelOnClickSearch}
                    />
                  </span>
                  <div>
                    <button
                      className="px-3 py-3 bg-gradient-to-br from-orange-400 to-pink-600 text-white rounded-full font-bold"
                      onClick={handelSignOut}
                    >
                      <FaSignOutAlt />
                    </button>
                  </div>
                </div>
                <div className="ssm:hidden flex items-center">
                  <MobileHeader />
                </div>
              </>
            )}
          </div>
        </ContentWrapper>
      </div>
      {searchbarStates && <SearchBox />}
      {hamburgerStates && <Hamburger />}
    </>
  );
}

export default Header;
