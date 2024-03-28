import React from "react";

function Loding() {
  return (
    <div className="flex w-full">
      <div className="p-4 w-full">
        <div className="bg-gray-300 w-full aspect-[1/1.5] animate-pulse rounded-xl"></div>
        <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
        <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
      </div>{" "}
      <div className="p-4 w-full hidden xs:block">
        <div className="bg-gray-300 w-full aspect-[1/1.5] animate-pulse rounded-xl"></div>
        <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
        <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
      </div>{" "}
      <div className="p-4 w-full hidden break2:block">
        <div className="bg-gray-300 w-full aspect-[1/1.5] animate-pulse rounded-xl"></div>
        <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
        <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
      </div>{" "}
      <div className="p-4 w-full hidden  break1:block">
        <div className="bg-gray-300 w-full aspect-[1/1.5] animate-pulse rounded-xl"></div>
        <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
        <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
      </div>
    </div>
  );
}

export default Loding;
