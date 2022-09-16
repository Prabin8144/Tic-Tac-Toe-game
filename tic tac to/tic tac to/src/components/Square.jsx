import React from "react";

function Square({ clickedArray, handleClick }) {
  return (
    <div className="board">
      {clickedArray.map((item, index) => {
        if (item === "") {
          return (
            <div
              key={index}
              className="box"
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className="box clicked">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Square;
