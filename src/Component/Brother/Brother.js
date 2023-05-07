import React, { useContext } from "react";
import SpecialPerson from "../SpecialPerson/SpecialPerson";
import { RingContext } from "../Dadu/Dadu";

const Brother = () => {
  const [house, setHouse] = useContext(RingContext);

  return (
    <div className="border my-5 p-5">
      <h3>Brothers Gift:{house}</h3>

      <button onClick={() => setHouse(house + 1)}>House+</button>
      <SpecialPerson></SpecialPerson>
    </div>
  );
};

export default Brother;
