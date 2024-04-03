import React from "react";
import { useSelector } from "react-redux";

function ExploreHeading() {
  const geners = useSelector((state) => state.initial?.genresCollection);
  console.log(geners);
  return (
    <div>
      <div>
        <h1 className="text-white font-semibold text-3xl pb-8">
          Explore Movies
        </h1>
      </div>

      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default ExploreHeading;
