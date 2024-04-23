import React, { useState } from "react";

const PlusButton = (props) => {
  const handleAddBtn = () => {
    props.addBtn();
  };

  return (
    <button
      onClick={handleAddBtn}
      className="px-5 py-3 rounded-md bg-gray-500 active:scale-90 duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
};

export default PlusButton;
