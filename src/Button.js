import React from "react";

const Button = ({ value, counter, setCounter }) => {
  return (
    <>
      <button
        className={
          (value === "-" && counter === 0) || (value === "+" && counter === 10)
            ? "hidden"
            : "display"
        }
        onClick={() => {
          if (value === "+") {
            setCounter(counter + 1);
          } else if (value === "-") {
            setCounter(counter - 1);
          } else if (value === "Reset") {
            setCounter(counter - counter);
          }
        }}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
