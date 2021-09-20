export const apicall = async () => {
  let obj;
  //   fetch(url)
  obj = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((vl) => {
      //this.setState({ data: vl });
      //obj = { ...vl };
      return vl;
    });
  return obj;
};
