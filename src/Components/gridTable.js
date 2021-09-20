import GridLayout from "react-grid-layout";
import React from "react";
import "../Css/style.css";
import "../Css/Formstyle.css";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
  griditem(data, CLASS = "body") {
    return (
      <div>
        {[...data].map((itm) => {
          return (
            <div className={CLASS} key={itm.i}>
              {itm.i}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const data = [
      [{ i: "Name" }, { i: "Email" }, { i: "City" }],
      [{ i: "Vishal Singh" }, { i: "Vishal@gmail.com" }, { i: "Vizag" }],
      [{ i: "Abhishek" }, { i: "Abhishek@ymail.com" }, { i: "Banglore" }],
      [{ i: "Vijay" }, { i: "Vijay@gmail.com" }, { i: "Jaipur" }],
      [{ i: "Rahul" }, { i: "Rahul@bmail.com" }, { i: "Surat" }],
      [{ i: "Sanjay" }, { i: "Sanjay@gmail.com" }, { i: "Delhi" }]
    ];
    const outer_layout = {
      lg: [
        { i: "b", x: 0, y: 0, w: 12, h: 2, static: true },
        { i: "a", x: 0, y: 2, w: 12, h: 2 },
        { i: "c", x: 0, y: 4, w: 12, h: 2 },
        { i: "d", x: 0, y: 6, w: 12, h: 2 },
        { i: "e", x: 0, y: 10, w: 12, h: 2 },
        { i: "f", x: 0, y: 8, w: 12, h: 2 }
      ],
      sm: [
        { i: "b", x: 0, y: 0, w: 6, h: 2, static: true },
        { i: "a", x: 0, y: 2, w: 6, h: 2 },
        { i: "c", x: 0, y: 4, w: 6, h: 2 },
        { i: "d", x: 0, y: 6, w: 6, h: 2 },
        { i: "e", x: 0, y: 10, w: 6, h: 2 },
        { i: "f", x: 0, y: 8, w: 6, h: 2 }
      ],
      xxs: [
        { i: "b", x: 0, y: 0, w: 3, h: 2, static: true },
        { i: "a", x: 0, y: 2, w: 3, h: 2 },
        { i: "c", x: 0, y: 4, w: 3, h: 2 },
        { i: "d", x: 0, y: 6, w: 3, h: 2 },
        { i: "e", x: 0, y: 10, w: 3, h: 2 },
        { i: "f", x: 0, y: 8, w: 3, h: 2 }
      ]
    };

    return (
      <div className="frm">
        <ResponsiveGridLayout
          className="layout"
          layouts={outer_layout}
          rowHeight={30}
          breakpoints={{ lg: 900, sm: 500, xxs: 0 }}
          cols={{ lg: 12, sm: 6, xxs: 3 }}
        >
          <div id="b" key="b">
            {this.griditem(data[0], "head")}
          </div>

          <div id="a" key="a">
            {this.griditem(data[1])}
          </div>

          <div id="c" key="c">
            {this.griditem(data[2])}
          </div>

          <div id="d" key="d">
            {this.griditem(data[3])}
          </div>
          <div id="e" key="e">
            {this.griditem(data[4])}
          </div>
          <div id="f" key="f">
            {this.griditem(data[5])}
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}

export default MyFirstGrid;
{
  /* <GridLayout
          className="layout"
          layout={outer_layout}
          cols={9}
          rowHeight={30}
          width={1200}
        > */
}
// [
//   { i: "b", x: 0, y: 0, w: 6, h: 2, static: true },
//   { i: "a", x: 0, y: 2, w: 6, h: 2 },
//   { i: "c", x: 0, y: 4, w: 6, h: 2 },
//   { i: "d", x: 0, y: 6, w: 6, h: 2 },
//   { i: "e", x: 0, y: 10, w: 6, h: 2 },
//   { i: "f", x: 0, y: 8, w: 6, h: 2 }
// ];
