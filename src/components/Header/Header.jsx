import React, { useEffect, useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

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

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  unlimated loding

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  console.log("this is visible", visible);

  return (
    <>
      <div
        className={` ${
          hamburgerStates
            ? `fixed z-20 top-0 ${
                visible && "bg-[#04152D]"
              }  ssm:bg-opacity-100 h-fit w-full`
            : `fixed z-20 top-0 inset-0 ${
                !visible && "bg-[#04152D]"
              }  bg-opacity-100 h-fit w-full`
        }`}
      >
        <ContentWrapper>
          <div
            className={`${
              visible ? "" : "backdrop-blur-lg"
            }  py-3  w-full flex justify-between`}
          >
            <Link to={"/home"}>
              <div className=" flex items-center gap-3">
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
            </Link>
            {user && (
              <>
                <div className="hidden ssm:flex items-center gap-5 ">
                  <ul className="text-white flex gap-5  text-xl">
                    <NavLink to={"/exploreMovies"}>
                      <li className="hover:text-pink-900 ssm:font-semibold">
                        Movies
                      </li>
                    </NavLink>
                    <NavLink to={"/exploreTv"}>
                      <li className="hover:text-pink-900 ssm:font-semibold">
                        TV Shows
                      </li>
                    </NavLink>
                  </ul>
                  <span>
                    <IoIosSearch
                      className="text-white text-2xl"
                      onClick={handelOnClickSearch}
                    />
                  </span>
                  <div>
                    <button
                      className="px-3 py-3 bg-button text-white rounded-full font-bold"
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
