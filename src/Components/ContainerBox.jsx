import React, { useState } from "react";
import DisplayText from "./DisplayText";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import ResetButton from "./ResetButton";

const ContainerBox = (props) => {
  return (
    <div className="md:h-screen h-auto md:flex flex-col justify-center items-center md:bg-gray-900 bg-none md:gap-10 gap-0">
    <h1 className="md:block hidden text-3xl text-white font-mono w-full text-center tracking-widest">React Counter</h1>
    <div className="p-5 md:rounded-md rounded-none  mx-auto md:mt-0 sm:mt-0 justify-center items-center flex flex-col md:gap-6 gap-20 bg-gray-600 sm:w-screen md:w-[300px] h-screen sm:h-screen md:h-auto">
      <h1 className="md:hidden block text-white font-mono text-4xl w-full tracking-widest lg:text-3xl md:text-3xl text-center">React Counter</h1>
      <div className="bg-gray-300 px-10 md:w-full w-auto md:px-5 md:py-2 py-10 rounded-md">
        <DisplayText state={props.state} />
      </div>
      <div className="flex md:w-full w-[300px] md:border-none border-2 md:p-0 p-3 md:rounded-none rounded-md md:justify-center justify-between gap-5"> 
        <PlusButton addBtn={props.addBtn} />
        <MinusButton subBtn={props.subBtn} state={props.state} />
        <ResetButton resetBtn={props.resetBtn} />
      </div>
    </div>
    <p className="md:block hidden fixed bg-gray-600 px-3 py-2 rounded-full text-sm text-gray-400 opacity-45  bottom-10">Design is also optimized for mobile</p>
    </div>
  );
};

export default ContainerBox;
