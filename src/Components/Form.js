import React, { useState } from "react";
// import './Formstyle.css'

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    choice: ""
  });
  // const [card,setCard]=useState([]);

  const todata = (e) => {
    e.preventDefault();
    const attr = e.target.name;
    const val = e.target.value;
    setData({ ...data, [attr]: val });
  };

  const handler = () => {
    let temp = localStorage.getItem("data");
    console.log(temp);
    if (temp == null) {
      temp = "[]";
    }
    temp = JSON.parse(temp);
    console.log(temp);
    temp.push(data);
    console.log(temp);
    localStorage.setItem("data", JSON.stringify(temp));
  };

  return (
    <section className="frm">
      <section class="form">
        <h2> FORM DATA </h2>
        <form>
          <label htmlfor="name"> NAME: </label> <br />
          <input
            type="text"
            name="name"
            placeholder="Enter Name.."
            onChange={todata}
          />{" "}
          <br />
          <label htmlfor="email">EMAIL: </label> <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email..abc@xyz.com"
            onChange={todata}
          />{" "}
          <br />
          <label htmlfor="date">DATE: </label> <br />
          <input type="date" name="date" onChange={todata} /> <br />
          <label htmlfor="choice">CHOICE: </label> <br />
          <select name="choice" onChange={todata}>
            <option selected>-select-</option>
            <option>Choice-1</option>
            <option>Choice-2</option>
            <option>Choice-3</option>
            <option>Choice-4</option>
          </select>
          <br />
          <br />
          <button type="submit" id="sub" onClick={handler}>
            SUBMIT
          </button>
        </form>
      </section>
      <section id="card">
        {(function () {
          const record = JSON.parse(localStorage.getItem("data"));
          if (record) {
            return record.map((vl) => {
              const { name, email, date, choice } = vl;
              return (
                <section id="carditem">
                  {name}
                  <br />
                  {email}
                  <br />
                  {date}
                  <br />
                  {choice}
                </section>
              );
            });
          }
        })()}
      </section>
    </section>
  );
};

export default Form;
