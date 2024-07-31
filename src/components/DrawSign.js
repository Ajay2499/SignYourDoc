import React, { useRef, useState } from "react";
import Header from "./Header";
import ReactSignatureCanvas from "react-signature-canvas";
import { Link } from "react-router-dom";

const DrawSign = () => {
  const signCanvas = useRef();
  const [penColor, setPenColor] = useState("black");
  const colors = ["Black", "Blue", "Green", "Red"];

  const handleClick = (color) => () => {
    setPenColor(color);
  };
  return (
    <div>
      <Header />
      <div className="font-semibold text-teal-600 p-4 m-2">
        <a href="/">Go back</a>
      </div>
      <div className="-mt-7">
        <h1 className="font-semibold text-teal-800 p-2 text-center text-4xl">
          Draw Your Signature
        </h1>
        <div className="flex justify-center items-center mt-6">
          <div
            className="bg-gray-100"
            style={{ width: "500px", height: "200px" }}
          >
            <ReactSignatureCanvas
              penColor={penColor}
              canvasProps={{ width: 500, height: 200 }}
              ref={signCanvas}
            />
            <div class="flex justify-center items-center m-2 mb-1">
              <div class="flex items-center">
                <span class="mr-2">Pen Color:</span>
                {colors.map((color) => (
                  <span
                    class="w-5 h-5 rounded-full mx-1"
                    style={{ backgroundColor: color }}
                    onClick={handleClick(color)}
                  ></span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="m-5 bg-gray-400 p-4 w-40 rounded-lg"
                onClick={() => signCanvas.current.clear()}
              >
                Clear
              </button>
              <button className="m-5 bg-gray-400 p-4 w-40 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawSign;
