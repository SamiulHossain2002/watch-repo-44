import React from "react";
import { useLoaderData } from "react-router-dom";
import Watch from "./Watch";

const Home = () => {
  const watches = useLoaderData();
  console.log(watches);
  return (
    <div class="container mx-auto  my-5 row row-cols-1  row-cols-md-3 g-4 ">
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </div>
  );
};

export default Home;
