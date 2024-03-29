import React from "react";
import Navbar from "./components/navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 font-satoshi text-white">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  );
}
export default App;
