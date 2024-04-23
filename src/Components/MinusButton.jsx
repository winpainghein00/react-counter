import React from "react";

const MinusButton = (props) => {
    const handleSubBtn = () => {
        if(props.state > 0){
        props.subBtn()
        }
    }
  return (
    <button
    onClick={handleSubBtn}
    className="px-5 py-3 rounded-md bg-gray-500 active:scale-90 duration-150 md:w-auto w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 stroke-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </button>
  );
};

export default MinusButton;
