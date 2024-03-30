import React from "react";
import { useSelector } from "react-redux";

import BgBanner from "./BgBanner";
import BannerDetailsContents from "./BannerDetailsContents";

function DetailsBanner() {
  const detailsvalue = useSelector(
    (state) => state.detailsMovieTv?.moviesTvDetails
  );

  if (!detailsvalue) {
    return <div></div>;
  }

  return (
    <div className="  h-full w-full">
      <BgBanner />
      <BannerDetailsContents />
    </div>
  );
}

export default DetailsBanner;
