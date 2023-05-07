import React from "react";
import { useContext } from "react";
import { MoneyContext } from "../Dadu/Dadu";

const SpecialPerson = () => {
  const taka = useContext(MoneyContext);
  return (
    <div className="border my-5 p-5">
      <h3>Special vabi:{taka}</h3>
    </div>
  );
};

export default SpecialPerson;
