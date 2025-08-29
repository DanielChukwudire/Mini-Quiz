import React from "react";

const Row: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900 flex-col text-zinc-50 justify-around flex items-center">
      <div className=" w-300 h-30 grid  grid-cols-12 grid-flow-dense gap-4">
        <div className="bg-blue-600  col-span-8"></div>
        <div className=" bg-blue-600  col-span-4"></div>
      </div>
      <div className="  h-30 grid  grid-cols-12 grid-flow-dense w-300 gap-4">
        <div className="bg-red-500 col-span-4"></div>
        <div className="bg-red-500 col-span-4"></div>
        <div className="bg-red-500 col-span-4"></div>
      </div>
      <div className="   grid grid-rows-3 row-span-10 p-2 bg-white grid-flow-dense w-300 gap-4">
        <div className="bg-yellow-400  p-2"></div>
        <div className="bg-yellow-400 col-span-5"></div>
        <div className="bg-yellow-400 col-span-5"></div>
        <div className="bg-yellow-400 p-2"></div>
        {/* <div className="bg-yellow-400 rows-span-2"></div> */}
      </div>
    </div>
  );
};
export default Row;
