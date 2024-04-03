import React, { useState, useEffect, useRef } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeToggle } from "../../store/navbar/headerSlice";
import { addKeyWord } from "../../store/searchSlice/searchSlice";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCloseSearch = () => {
    dispatch(closeToggle());
  };

  const handelOnKeyDown = (event) => {
    if (inputElement.current.value === "") {
    } else if (event.key === "Enter") {
      navigate(`/search/${inputElement.current.value}`);
      dispatch(addKeyWord(inputElement.current.value));
      dispatch(closeToggle());
      inputElement.current.value = "";
    }
  };

  return (
    <div
      className={`w-full fixed ${
        isOpen ? "top-16" : "top-0"
      } py-3 z-30 bg-white transition-all duration-200`}
    >
      <ContentWrapper>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search for a movie or tv show..."
            className="w-full border-none outline-none font-medium"
            ref={inputElement}
            onKeyDown={handelOnKeyDown}
          />
          <span>
            <IoClose className="text-2xl" onClick={handleCloseSearch} />
          </span>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default SearchBox;
