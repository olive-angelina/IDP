import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 px-12 h-screen lg:h-[89vh] flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start text-black">
            Dive into endless{" "}
            <span className="flex items-end justify-center lg:justify-start mt-2 lg:mt-0">
              audi
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
                  alt="headphone"
                  className="h-10 md:h-12 lg:h-20 lg:mx-2"
                />
              </span>
            </span>{" "}
            adventures
          </h1>
        </div>
      </div>
      <div className="mt-12 w-full flex flex-col lg:flex-row items-end justify-between">
        <div className="flex flex-col items-center lg:items-start justify-center">
          <p className="text-xl font-semibold text-center lg:text-start text-indigo-900">
            Listen to the most popular podcasts on just one platform -{" "}
            <b className="text-purple-900">PODCASTER</b>
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <p className="text-gray-700 font-bold text-center lg:text-end">
          Your gateway to the best podcasts across various genres.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
