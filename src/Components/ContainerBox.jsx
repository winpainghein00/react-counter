import React, { useState } from "react";
import DisplayText from "./DisplayText";
import PlusButton from "./PlusButton";
import MinusButton from "./MinusButton";
import ResetButton from "./ResetButton";

const ContainerBox = (props) => {
  return (
    <div className="p-5 rounded-md  mx-auto md:mt-44 sm:mt-0 justify-center items-center flex flex-col md:gap-6 gap-20 bg-gray-600 sm:w-screen md:w-[300px] h-screen sm:h-screen md:h-auto">
      <h1 className="text-white font-semibold text-5xl lg:text-3xl md:text-3xl mb-10">React Counter</h1>
      <div className="bg-gray-300 px-5 md:w-full w-[300px] py-2 rounded-md">
        <DisplayText state={props.state} />
      </div>
      <div className="flex md:w-full w-[300px] md:justify-center justify-between gap-5">
        <PlusButton addBtn={props.addBtn} />
        <MinusButton subBtn={props.subBtn} state={props.state} />
        <ResetButton resetBtn={props.resetBtn} />
      </div>
    </div>
  );
};

export default ContainerBox;
