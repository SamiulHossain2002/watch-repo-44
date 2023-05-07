import React, { useContext } from "react";
import { MoneyContext, RingContext } from "../Dadu/Dadu";

const Sister = () => {
  const teha = useContext(MoneyContext);
  const [house] = useContext(RingContext);
  return (
    <div className="border my-5 p-5">
      <h3>Fufato sister:{teha}</h3>
      <h3>Gift Fufato sister:{house}</h3>
    </div>
  );
};

export default Sister;
