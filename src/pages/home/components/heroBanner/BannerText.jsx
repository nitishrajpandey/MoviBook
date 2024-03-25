import React from "react";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";

function BannerText() {
  return (
    <ContentWrapper>
      <div className="  flex flex-col  items-center justify-center px-5 ">
        <span className=" text-white  font-bold text-[50px] ssm:text-[60px] md:text-[90px]">
          Welcome.
        </span>
        <span className="text-white text-xl md:text-2xl text-center">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <span className="w-full flex justify-center mt-5 md:mt-8">
          <input
            type="text"
            className="w-[600px] text-xl py-2 ss:py-3 px-3 ss:px-5 rounded-l-2xl outline-none"
          />
          <button className=" py-2 ss:py-3 px-3 ss:px-5 font-semibold rounded-r-2xl bg-gradient-to-br from-orange-400 to-pink-600 text-white text-xl">
            Search
          </button>
        </span>
      </div>
    </ContentWrapper>
  );
}

export default BannerText;
