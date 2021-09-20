import { Component } from "react";
import Select from "react-select";
import "../Css/table.css";

class Table extends Component {
  state = {
    data: [
      {
        Name: "Abhishek",
        Email: "abc@cd.com",
        Age: "21",
        Dob: "01jan21",
        location: "Lucknow"
      },
      {
        Name: "Rahul",
        Email: "abq@od.com",
        Age: "24",
        Dob: "15dec25",
        location: "Noida"
      },
      {
        Name: "Sony",
        Email: "yun@cod.com",
        Age: "20",
        Dob: "10feb01",
        location: "Delhi"
      },
      {
        Name: "Hess",
        Email: "ac@cdef.com",
        Age: "22",
        Dob: "05jan30",
        location: "Kolkata"
      },
      {
        Name: "Jordan",
        Email: "xyz@cd.com",
        Age: "19",
        Dob: "01sep99",
        location: "Vizag"
      },
      {
        Name: "Heron",
        Email: "ijk@lmno.com",
        Age: "25",
        Dob: "22june90",
        location: "Banglore"
      },
      {
        Name: "Rahul kl",
        Email: "klrahul@lmno.com",
        Age: "22",
        Dob: "27june80",
        location: "Delhi"
      }
    ],
    filtered_data: [
      {
        Name: "Abhishek",
        Email: "abc@cd.com",
        Age: "21",
        Dob: "01jan21",
        location: "Lucknow"
      },
      {
        Name: "Rahul",
        Email: "abq@od.com",
        Age: "24",
        Dob: "15dec25",
        location: "Noida"
      },
      {
        Name: "Sony",
        Email: "yun@cod.com",
        Age: "20",
        Dob: "10feb01",
        location: "Delhi"
      },
      {
        Name: "Hess",
        Email: "ac@cdef.com",
        Age: "22",
        Dob: "05jan30",
        location: "Kolkata"
      },
      {
        Name: "Jordan",
        Email: "xyz@cd.com",
        Age: "19",
        Dob: "01sep99",
        location: "Vizag"
      },
      {
        Name: "Heron",
        Email: "ijk@lmno.com",
        Age: "25",
        Dob: "22june90",
        location: "Banglore"
      },
      {
        Name: "Rahul kl",
        Email: "klrahul@lmno.com",
        Age: "22",
        Dob: "27june80",
        location: "Delhi"
      }
    ],
    search: "",
    emailsrch: ""
  };

  handler = (e) => {
    const bttn = e.target;
    if (bttn.tagName === "BUTTON") {
      navigator.clipboard.writeText(bttn.previousSibling.textContent.trim());
    }
  };
  timout = null;
  handlesearch = (event) => {
    clearTimeout(this.timout);
    this.timout = setTimeout(() => {
      console.log("in timeout");
      if (event.target.name === "search") {
        this.setState({ search: event.target.value.toLowerCase() });
      }
      if (event.target.name === "email") {
        this.setState({ emailsrch: event.target.value.toLowerCase() });
      }
      const filtered_data = this.state.data.filter((data) => {
        const { Name, Email, Age, Dob, location } = data;
        const searchString = (
          Name +
          Email +
          Age +
          Dob +
          location
        ).toLowerCase();

        return (
          searchString.includes(this.state.search) &&
          Email.includes(this.state.emailsrch)
        );
      });

      this.setState({ filtered_data });
      console.log(filtered_data);
    }, 1200);
  };
  trail(e) {
    console.log(e);
  }
  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];
    return (
      <section id="main">
        <label htmlFor="search">Search field1 : </label>
        <input
          type="text"
          name="search"
          className="srch"
          placeholder="enter a text..."
          onChange={this.handlesearch}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          name="email"
          placeholder="enter email..."
          className="srch"
          onChange={this.handlesearch}
        />
        <br />
        <button name="button">Type for searching...</button>

        <caption>TABLE</caption>
        <table id="tble" onClick={this.handler}>
          <tr id="head">
            {[...Object.keys(this.state.data[0])].map((head) => {
              return <th class="heading">{head}</th>;
            })}
          </tr>
          {this.state.filtered_data &&
            this.state.filtered_data.map((data) => {
              const { Name, Email, Age, Dob, location } = data;
              return (
                <tr>
                  <td class="data">
                    {Name}
                    <button>Copy</button>
                  </td>
                  <td class="data">
                    {Email}
                    <button>Copy</button>
                  </td>
                  <td class="data">
                    {Age}
                    <button>Copy</button>
                  </td>
                  <td class="data">
                    {Dob}
                    <button>Copy</button>
                  </td>
                  <td class="data">
                    {location}
                    <button>Copy</button>
                  </td>
                </tr>
              );
            })}
        </table>
        <Select
          options={options}
          isMulti="true"
          isSearchable="true"
          onChange={this.trail}
          onInputChange={this.trail}
          defaultValue="vanilla"
        />
      </section>
    );
  }
}

export default Table;

// if (event.target.name === "button") {
//   const target1 = event.target.previousSibling.previousSibling;
//   this.setState({
//     ...this.state,
//     emailsrch: target1.value.toLowerCase(),
//     search:
//       target1.previousSibling.previousSibling.previousSibling.value.toLowerCase()
//   });
// }
