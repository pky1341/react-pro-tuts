import { useState } from "react";

function App() {
  let [color, setColor] = useState("#38BDF8");
  return (
    <div
      className="2xl:container h-screen w-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed top-3/4 left-1/4 bg-slate-500 p-3 rounded-2xl">
        <button
          className="bg-blue-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("blue")}
        >
          C Blue
        </button>
        <button
          className="bg-pink-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("pink")}
        >
          C Pink
        </button>
        <button
          className="bg-purple-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("purple")}
        >
          C Purple
        </button>
        <button
          className="bg-green-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("green")}
        >
          C Green
        </button>
        <button
          className="bg-yellow-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("yellow")}
        >
          C Yellow
        </button>
        <button
          className="bg-orange-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("orange")}
        >
          C Orange
        </button>
        <button
          className="bg-red-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("red")}
        >
          C Red
        </button>
        <button
          className="bg-black p-2 rounded-2xl mx-2 shadow-2xl text-fuchsia-50"
          onClick={() => setColor("black")}
        >
          C Black
        </button>
        <button
          className="bg-white p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("white")}
        >
          C White
        </button>
        <button
          className="bg-gray-700 p-2 rounded-2xl mx-2 shadow-2xl"
          onClick={() => setColor("gray")}
        >
          C Gray
        </button>
      </div>
    </div>
  );
}

export default App;
