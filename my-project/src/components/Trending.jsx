import React from "react";
import CardMovie from "./CardMovie";
import { moviesData } from "../fakeData/moviesData";


const Trending = () => {
  return (
    <div>
      <h3 className="border-b border-primary text-primary py-6 text-3xl mt-12 ">
        Trending
      </h3>
      <div>
      <CardMovie movies={moviesData}/>
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-125 ease-out duration-500">
            load more
        </button>
      </div>
    </div>
  );
};

export default Trending;
