import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { closeToggle, hamburgerToggle } from "../../store/navbar/headerSlice";
import { useDispatch, useSelector } from "react-redux";

function MobileHeader() {
  const searchbarStates = useSelector(
    (state) => state.header.searchbarToggleState
  );

  const hamburgerStates = useSelector(
    (state) => state.header.toggleHamburgerState
  );

  const dispatch = useDispatch();

  const handelCloseSearch = () => {
    if (searchbarStates) {
      return;
    }
    dispatch(closeToggle());
  };

  const handelHamburger = () => {
    dispatch(hamburgerToggle());
  };
  return (
    <div className="flex gap-5">
      <span>
        <IoIosSearch
          className="text-white text-2xl "
          onClick={handelCloseSearch}
        />
      </span>
      <span>
        {hamburgerStates ? (
          <IoClose className="text-2xl text-white" onClick={handelHamburger} />
        ) : (
          <IoMenu className="text-white text-2xl " onClick={handelHamburger} />
        )}
      </span>
    </div>
  );
}

export default MobileHeader;
