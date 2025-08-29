import React from "react";
import Image from "../assets/dire.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-[100%] h-[300px] bg-[white] m-2.5 flex">
      <div className="w-[50%] h-[auto] flex  flex-col justify-center">
        <h1 className="text-[45px] text-[#1E293B]">
          Effective Management of Large Projects at{" "}
          <span className="text-[#0EA5E9]">Tailwick</span>
        </h1>
        <p className="text-[18px] font-[200px] text-[#6483B8] m-[10px]">
          Effective professional services project management means having a firm
          grasp on the scope, budget, resources, personnel, and timeline
          dedicated to a project. An effective project manager is able to manage
          unplanned issues while keeping the ball rolling on company goals and
          tasks in progress.
        </p>

        <div className="w-50% flex gap-2">
          <button className="w-[150px] h-[40px] bg-[#3B82F6] text-[white] text-[14px] rounded-[5px] ">
            Learn More
          </button>
          <button className="w-[150px] h-[40px] bg-[blue] text-[14px] text-[red] rounded-[5px] ">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-[50%] h-[300px]">
        <img
          className="w-[100%] h-[100%] rounded-[10px] object-center"
          src={Image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
