import React from "react";
import { useSelector } from "react-redux";
import { noPoster } from "../../../../assets";

function BgBanner() {
  const detailsvalue = useSelector(
    (state) => state.detailsMovieTv?.moviesTvDetails
  );
  const BannerUrl = useSelector((state) => state.initial?.url?.backdrop);
  const bgBanner = BannerUrl + detailsvalue?.backdrop_path;

  console.log(detailsvalue?.backdrop_path);

  console.log(bgBanner);

  if (!detailsvalue) {
    return <div></div>;
  }

  return (
    <>
      {" "}
      <div className=" absolute overflow-hidden bg-cover opacity-20 bg-center  h-full w-full   ">
        {detailsvalue?.backdrop_path ? (
          <img
            src={bgBanner}
            className="  object-cover object-center h-full w-full   "
            alt=""
          />
        ) : (
          <img
            src={noPoster}
            className="  object-cover object-center h-full w-full   "
            alt=""
          />
        )}

        <div
          className="absolute bottom-0 bg-transparent inset-0   w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(4, 21, 45, 0) 5%, #04152d 100%)",
          }}
        ></div>
      </div>
    </>
  );
}

export default BgBanner;
