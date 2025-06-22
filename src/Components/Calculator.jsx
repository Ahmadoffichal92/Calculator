import React, { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");

  const getValue = (e) => {
    console.log(e.target.value);
    setData(data.concat(e.target.value));
  };

  const calculation = () => {
    setData(eval(data).toString());
    // not ...... concat function ye string ko concat karti he or eval() ye number return karta he isi lea toString() lagaya
  };

  const back = () => {
    setData(data.slice(0, -1));
    //  not .......... 0 ka matlab start index and -1 matab last se 1 ke ilawa
  };
  const clear = () => {
    setData("");
  };

  return (
    <div className="bg-white hover:bg-gray-200 rounded-xl shadow-2xl p-6 w-96">
      <div className="mb-4 text-right text-2xl bg-gray-300 hover:bg-gray-400 p-8 rounded-2xl  overflow-auto ">
        <input placeholder="0" value={data}readOnly/>
      </div>

      <div className="grid grid-cols-4 gap-3 ">
        <button onClick={getValue} value="(">
          {" "}
          ({" "}
        </button>
        <button onClick={getValue} value=")">
          {" "}
          ){" "}
        </button>
        <button onClick={getValue} value="%">
          {" "}
          %
        </button>
        <button onClick={clear}> AC </button>
        <button onClick={getValue} value="7">
          {" "}
          7{" "}
        </button>
        <button onClick={getValue} value="8">
          {" "}
          8{" "}
        </button>
        <button onClick={getValue} value="9">
          {" "}
          9
        </button>
        <button onClick={getValue} value="*">
          *{" "}
        </button>

        <button onClick={getValue} value="4">
          {" "}
          4{" "}
        </button>
        <button onClick={getValue} value="5">
          {" "}
          5{" "}
        </button>
        <button onClick={getValue} value="6">
          {" "}
          6
        </button>
        <button onClick={getValue} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={getValue} value="1">
          {" "}
          1{" "}
        </button>
        <button onClick={getValue} value="2">
          {" "}
          2{" "}
        </button>
        <button onClick={getValue} value="3">
          {" "}
          3
        </button>
        <button onClick={getValue} value="+">
          {" "}
          +{" "}
        </button>

        <button onClick={getValue} value="0">
          {" "}
          0{" "}
        </button>
        <button onClick={back}>Back </button>
        <button onClick={calculation}>= </button>
        <button onClick={getValue} value="/">
          {" "}
          /{" "}
        </button>
      </div>
    </div>
  );
}
export default Calculator;

