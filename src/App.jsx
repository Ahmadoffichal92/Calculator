import React from "react";
import Calculator from "./Components/Calculator";
import "./App.css";
function App() {
  return (
    <>
      <div className=" h-screen flex items-center justify-center  bg-[url('assets/imag-1.avif')] bg-cover bg-center">
        <Calculator />
      </div>
    </>
  );
}

export default App;
