import React from "react";
import { BiTime } from "react-icons/bi";

const CardMovie = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4 my-6">
      {movies.map((movie, index) => (
        <div class="card">
          <a href="#">
            <img class="rounded-t-lg w-full" src={movie.src} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                {movie.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-white dark:text-gray-400">
              {movie.main}
            </p>
          </div>
          <div className="badge">
            <BiTime/>
            <p>{movie.runtime}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMovie;
