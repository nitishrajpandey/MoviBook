import React from "react";

function ContentWrapper({ children }) {
  return (
    <div className="w-full max-w-[1200px] m-auto  border-2 border-red-800">
      {children}
    </div>
  );
}

export default ContentWrapper;
