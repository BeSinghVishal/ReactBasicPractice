import React, { useContext } from "react";

const NumberContext = React.createContext();

const Basecomp = () => {
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
};

function Display() {
  return (
    <div>
      <NumberContext.Consumer>
        {(value) => (
          <div>
            This Value is accessed from Display component and answer is {value}.
          </div>
        )}
      </NumberContext.Consumer>
      <ChildLevel3 />
    </div>
  );
}

function ChildLevel3() {
  const value = useContext(NumberContext);
  return (
    <div>
      This Value is accessed from ChildLevel3 component within Display and
      answer is {value}
    </div>
  );
}
export default Basecomp;
