export const Increment = (payload = 1) => {
  // console.log(payload);
  return {
    type: "increment",
    payload
  };
};
export const Decrement = (payload = 1) => {
  return {
    type: "decrement",
    payload
  };
};
export const callApi = () => {
  return {
    type: "apiCall"
  };
};
