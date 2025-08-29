// import { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count changed to: ${count}`);
//   }, [count]);

//   return (
//     <div className="w-full h-screen items-center flex flex-col justify-center bg-teal-700">
//       <p>
//         <button className="w-auto p-3 h-auto bg-black rounded-2xl text-amber-50">
//           Count: {count}
//         </button>
//       </p>
//       <div className="flex  w-100 justify-center mt-4">
//         <p className="flex justify-between w-50  ">
//           <button
//             onClick={() => setCount(count + 1)}
//             className="w-auto p-3 h-auto bg-black rounded-2xl text-amber-50"
//           >
//             Add
//           </button>
//           <button
//             onClick={() => setCount(count - 1)}
//             className="w-30 p-3 h-auto bg-black rounded-2xl text-amber-50"
//           >
//             Subtract{" "}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Counter;
