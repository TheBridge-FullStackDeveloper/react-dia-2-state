import React, { useState } from "react";

const CounterFunctional = (props) => {
  const [counter, setCounter] = useState(props.initialValue);
  const increment = () => {
    setCounter(counter + 1);
  };
  
  return <div onClick={increment}>CounterFunctional: {counter} </div>;
};

export default CounterFunctional;
