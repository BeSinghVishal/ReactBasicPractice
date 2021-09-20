const initialState = { counter: 0, apidata: [] };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment_REQUIRED") {
    console.log(action.payload);
    return {
      counter: state.counter + parseInt(action.payload, 10)
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - parseInt(action.payload, 10)
    };
  }
  if (action.type === "callApi_REQUIRED") {
    return { ...state, apidata: action.payload };
  } else return state;
};
export default counterReducer;
