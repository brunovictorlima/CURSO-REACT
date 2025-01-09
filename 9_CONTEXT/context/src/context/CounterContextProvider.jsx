// 2 - criar provider
import { useState } from "react";
import PropTypes from "prop-types";
import { CounterContext } from "./CounterContext";

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
