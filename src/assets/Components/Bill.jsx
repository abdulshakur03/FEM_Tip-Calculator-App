import React from "react";

import dollar from "../Images/icon-dollar.svg";
export default function Bill({ editableRef, num, handleBill, focusParagraph }) {
  
  return (
    <div>
      <h2>Bill</h2>

      <div
        onClick={focusParagraph}
        className="flex gap-20 items-center bg-amber-100 w-auto"
      >
        <img src={dollar} alt="" />
        <input
          type="number"
          value={num}
          ref={editableRef}
          contentEditable={true}
          onInput={handleBill}
          className="outline-none focus:outline-none focus:ring-0 no-spinner"
          bg-
        />
      </div>
    </div>
  );
}
