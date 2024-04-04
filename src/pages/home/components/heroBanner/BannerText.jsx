import React, { useRef } from "react";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addKeyWord } from "../../../../store/searchSlice/searchSlice";
import { useNavigate } from "react-router-dom";

function BannerText() {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const navigate = useNavigate();

  const handelOnclickSearch = () => {
    if (inputElement.current.value) {
      navigate(`/search/${inputElement.current.value}`);
      dispatch(addKeyWord(inputElement.current.value));
      inputElement.current.value = "";
    }
  };

  const handelOnKeyDown = (event) => {
    if (inputElement.current.value === "") {
    } else if (event.key === "Enter") {
      navigate(`/search/${inputElement.current.value}`);
      dispatch(addKeyWord(inputElement.current.value));
      inputElement.current.value = "";
    }
  };

  return (
    <ContentWrapper>
      <div className="  flex flex-col  items-center justify-center px-5 ">
        <span className=" text-white gradient-text font-bold text-[50px] ssm:text-[60px] md:text-[90px]">
          Welcome.
        </span>
        <span className="text-white text-xl md:text-2xl text-center">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <span className="w-full flex justify-center mt-5 md:mt-8">
          <input
            type="text"
            placeholder="Search for a movie or tv show..."
            className="w-[600px] text-xl py-2 ss:py-3 px-3 ss:px-5 rounded-l-2xl outline-none"
            ref={inputElement}
            onKeyDown={handelOnKeyDown}
          />
          <button
            className=" py-2 ss:py-3 px-3 ss:px-5 font-semibold rounded-r-2xl bg-button text-white text-xl"
            onClick={handelOnclickSearch}
          >
            Search
          </button>
        </span>
      </div>
    </ContentWrapper>
  );
}

export default BannerText;
