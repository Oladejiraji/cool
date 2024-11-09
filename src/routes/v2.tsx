import React from "react";

const V2 = () => {
  return (
    <main className=" overflow-hidden h-full absolute inset-0">
      <div className="grid grid-cols-5 gap-12" id="infinity_grid_con">
        {new Array(100).fill(0).map((_, index) => {
          return (
            <div key={index} className=" grid_images">
              <img
                src="/assets/movie.webp"
                alt="movie images"
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default V2;
