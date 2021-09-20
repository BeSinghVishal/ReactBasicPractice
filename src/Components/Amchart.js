import * as am4core from "@amcharts/amcharts4/core";
import React from "react";
import { create_gchart } from "./charts/Gauge";
import { create_XYchart } from "./charts/XYchart";
import { create_Piechart } from "./charts/Piechart";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import "../Css/Formstyle.css";

class Chart extends React.Component {
  // domobj = React.createRef();
  // eventhndlr = (e) => {
  //   // console.log(this);
  //   let val = parseInt(e.target.value, 10);
  //   this.gchart.hands.values[0].value = val;
  // };

  // componentDidMount() {
  //   // create_XYchart(this.state.data);
  //   // create_gchart(this);
  //   // create_Piechart(this.state.data);
  // }
  state = {
    count: 0
  };

  // componentWillUnmount() {
  //   am4core.disposeAllCharts();
  // }

  componentDidMount() {
    // this.setState((state) => {
    //   console.log("Inside DidMount - first", state);
    //   return { ...state, count: this.state.count + 1 };
    // });

    // this.setState((state) => {
    //   console.log("Inside DidMount - second", state);
    //   return { ...state, count: state.count + 1 };
    // });
    // this.setState((state) => {
    //   console.log("Inside DidMount - third", state);
    //   return { ...state, count: state.count + 1 };
    // });
    // this.setState((state) => {
    //   console.log("Inside DidMount - fourth", state);
    //   return { ...state, count: state.count + 1 };
    // });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 5 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  /*evthnd(e) {
    //console.log(e.target.previousSibling.value);
    let val = e.target.previousSibling;
    if (val.previousSibling.value) {
      let data = JSON.parse(val.previousSibling.value);
      let choice = val.value;
      // console.log(data);
      // console.log(val.previousSibling.value);
      switch (choice) {
        case "Piechart":
          am4core.disposeAllCharts();
          console.log("pie");
          create_Piechart(data);
          break;
        case "XYchart-Line":
          am4core.disposeAllCharts();
          console.log("XY-Line");
          create_XYchart(data);
          break;
        case "XYchart-Coloumn":
          am4core.disposeAllCharts();
          console.log("XY-Coloumn");
          create_XYchart(data, "column");
          break;
        case "Gaugechart":
          am4core.disposeAllCharts();
          console.log("Gauge");
          create_gchart(data);
          break;
        default:
          console.log("choose valid option");
      }
    }
  }
  topdf = () => {
    //----------------------------------------------------
    html2canvas(this.domobj.current).then(function (canvas) {
      // document.body.appendChild(canvas);
      let img = canvas.toDataURL("image/png");
      let doc = new jsPDF("p", "mm", "a4");
      let width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();
      doc.addImage(img, "PNG", 0, 0, width - 1, height - 1);
      doc.save("thegraph.pdf");
    });*/
  //-------------------------------------------------------
  // html2pdf().from(this.domobj.current).save();
  //-------------------------------------------------------
  // let opt = {
  //   margin: 0,
  //   filename: "myfile.pdf",
  //   image: { type: "jpeg", quality: 2 },
  //   html2canvas: { scale: 1 },
  //   jsPDF: { unit: "in", format: "a4", orientation: "landscape" }
  // };
  // html2pdf().set(opt).from(this.domobj.current).save();
  //----------------------------------
  //};
  render() {
    return (
      <div className="chart">
        {console.log("Inside Render", this.state)}
        {/* <section>
          <textarea name="txt" id="txt"></textarea>
          <select name="choice" id="choice">
            <option selected>-select-</option>
            <option>Piechart</option>
            <option>XYchart-Line</option>
            <option>XYchart-Coloumn</option>
            <option>Gaugechart</option> */}
        {/* <option>Choice-4</option> */}
        {/* </select>
          <button id="btnn" onClick={this.evthnd}>
            Generate
          </button>
          <button onClick={this.topdf}>Download</button>
        </section>
        <section id="chartdiv" ref={this.domobj}></section> */}

        {/* <section id="chartdiv"></section>
        <input
          type="range"
          id="points"
          name="points"
          min="0"
          max="100"
          onChange={this.eventhndlr}
        />
        <div id="gchart"></div>
        <section id="chart2"></section> */}
      </div>
    );
  }
}

export default Chart;

// let obj = window.document.body.innerHTML;
// this.domobj.current.id = "print";
// console.log(this.domobj.current);

// window.document.body.innerHTML = "";
// window.document.body.append(this.domobj.current);
// window.print();
// window.document.body.innerHTML = "";
// window.document.body.innerHTML = obj;
// //  this.domobj.current.id = "chartdiv";
// console.log(obj);

//---------------------------------------

//  let allGraphs = document.querySelectorAll(".card");
//     //let imgArray=[];
//     let incre = 0;
//     let doc = new jsPDF("p", "mm", "a4");
//     let width = doc.internal.pageSize.getWidth();
//     let height = doc.internal.pageSize.getHeight();
//     allGraphs.forEach(async (graph, indx) => {
//       let divimg;
//       divimg = await html2canvas(graph).then(function(canvas) {
//         return canvas.toDataURL("image/png");
//       });
//       indx === 3 ? doc.addPage() : console.log("");
//       doc.addImage(divimg, "PNG", 0, indx * 50, width / 2, height / 6);
//     });

//     setTimeout(() => {
//       console.log("goin to save");
//       doc.save("thegraph.pdf");
//     }, 10000);
