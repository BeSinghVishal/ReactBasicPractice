import React, { useMemo } from "react";

const Child = ({ name, obj, passFunc }) => {
  console.log("in child render");
  passFunc();
  return (
    <div>
      Name is Displayed in child as : {name}
      <br />
      location displayed in child as : {obj.place}
    </div>
  );
};
export const MemoChild = React.memo(Child);
