import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect
} from "react";
export default function ParentFunction() {
  const childRef = useRef();
  let [data, setData] = useState(0);
  useEffect(() => {
    console.log("in effect", data);
  }, []);

  return (
    <div className="container">
      {console.log("in return", data)}
      <div>Parent Component</div>
      <button
        onClick={() => {
          childRef.current.focus();
          console.log(childRef);
        }}
      >
        Call Function
      </button>
      <Child ref={childRef} />
    </div>
  );
}
const Child = forwardRef((props, ref) => {
  //   console.log(ref);
  useImperativeHandle(ref, () => ({
    focus: showAlert
  }));
  function showAlert() {
    alert("Child Function Called");
  }

  const func = () => {
    console.log("inside a function of a functional child component ");
  };

  return (
    <div>
      Child Component
    </div>
  );
});
