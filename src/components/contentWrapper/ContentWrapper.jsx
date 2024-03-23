import React from "react";

function ContentWrapper({ children }) {
  return <div className="w-full max-w-[1200px] m-auto px-5">{children}</div>;
}

export default ContentWrapper;
