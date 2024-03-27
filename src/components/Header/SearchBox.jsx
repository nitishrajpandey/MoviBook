import React, { useState, useEffect } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeToggle } from "../../store/navbar/headerSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCloseSearch = () => {
    dispatch(closeToggle());
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
