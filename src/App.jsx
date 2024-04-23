import React, { useState } from "react";
import ContainerBox from "./Components/ContainerBox";

const App = () => {
  const [state, setState] = useState(0);
  const addBtn = () => {
    setState(state + 1);
  };
  const subBtn = () => {
    setState(state - 1);
  };
  const resetBtn = () => {
    setState(0)
  }
  return (
    <>
      <ContainerBox 
      state={state} 
      addBtn={addBtn}
      subBtn={subBtn}
      resetBtn={resetBtn}
       />
    </>
  );
};

export default App;
