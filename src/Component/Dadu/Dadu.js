import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Fufi from "../Fufi/Fufi";

export const MoneyContext = createContext(555555);
export const RingContext = createContext("Gold-Ring");

const Dadu = () => {
  const money = 5555;
  const [house, setHouse] = useState(1);

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={money}>
        <div className="container border my-5 p-5">
          <h2>Dadu</h2>
          <h3>Dadur taka:/=</h3>
          <section className="d-flex justify-content-between">
            {/*Props dealing:=> Props {props}is read-only component.props is unchangeable.props only উপর থেকে নিচে প্রবাহিত হয়. */}
            <Father></Father>
            <Uncle></Uncle>
            <Fufi></Fufi>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Dadu;
