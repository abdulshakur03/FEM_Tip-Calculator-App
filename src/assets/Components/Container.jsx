import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Header } from "./Header";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
export const Container = () => {
  const editableRef = useRef();
  const [num, setNum] = useState("");
  const handleBill = (e) => {
    let myValue = e.target.value;

    setNum(myValue);
  };
  const focusParagraph = () => editableRef.current.focus();
  return (
    <div>
      <Header />
      <Bill
        editableRef={editableRef}
        num={num}
        handleBill={handleBill}
        focusParagraph={focusParagraph}
      />
      <Tip />
      <People
        editableRef={editableRef}
        num={num}
        handleBill={handleBill}
        focusParagraph={focusParagraph}
      />
    </div>
  );
};
