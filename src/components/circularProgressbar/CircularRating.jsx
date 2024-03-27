import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularRating({ rating }) {
  return (
    <div className="w-[50px] absolute  ">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "32px",
          backgroundColor: "white",
          textColor: "black",
        })}
        className="rounded-full bg-white "
      />
      ;
    </div>
  );
}

export default CircularRating;
