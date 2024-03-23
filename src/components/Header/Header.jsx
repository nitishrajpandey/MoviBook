import React, { useEffect } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { logo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handelAuthStateChanged,
  signOutUser,
} from "../../firebase/authService";
import "./style.css";

function Header() {
  const user = useSelector((state) => state.loginSignup.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSignOut = () => {
    signOutUser(navigate);
  };

  useEffect(() => {
    handelAuthStateChanged(navigate, dispatch);
  }, []);

  return (
    <>
      <div className="absolute z-20 top-0 inset-0  bg-black bg-opacity-30 w-full h-[80px] flex justify-center">
        <ContentWrapper>
          <div className="  h-f  w-full flex justify-between">
            <div className=" flex items-center gap-3">
              <span className="w-[40px] ss:w-[50px]">
                <img src={logo} alt="" />
              </span>
              <span className="flex items-center">
                <h1
                  className="text-4xl ss:text-5xl gradient-text   font-bold"
                  style={{
                    clipPath: "clip-path: polygon(0% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  MOVIX
                </h1>
                <img
                  src="https://icons.iconarchive.com/icons/jommans/ladybug/128/File-Movie-icon.png"
                  className="w-[40px] ss:w-[60px] "
                />
              </span>
            </div>
            {user && (
              <div className="flex items-center gap-5 ">
                <ul className="text-white flex gap-5  text-xl">
                  <li>Home</li>
                  <li>Movie</li>
                </ul>
                <div>
                  <button
                    className="px-3 py-2 bg-slate-900 text-white rounded-xl"
                    onClick={handelSignOut}
                  >
                    Sign-out
                  </button>
                </div>
              </div>
            )}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default Header;
