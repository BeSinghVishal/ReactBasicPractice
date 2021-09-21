import { useCallback, useMemo, useState } from "react";
import { MemoChild } from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vishal");
  console.log("in parent render");
  const obj = {
    place: "Delhi"
  };
  const memoobj = useMemo(() => obj, []);
  const passFunc = () => {
    console.log("function passes from parent displayed in child");
  };
  const memoFunc = useCallback(() => passFunc(), []);

  return (
    <div>
      Count is displayed in Parent : {count}
      <button onClick={() => setCount((count) => count + 1)}>
        Increase count +
      </button>
      <button onClick={() => setName(`${name} singh`)}> change name </button>
      <MemoChild name={name} obj={memoobj} passFunc={memoFunc} />
    </div>
  );
};
export default Parent;
