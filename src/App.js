import React, { Component, lazy, Suspense } from "react";
import Counter from "./Components/ReduxCounter";
// import Chart from "./Components/Amchart";
import Table from "./Components/Table";
import Form from "./Components/Form";
import Nav from "./Components/Navigation";
import Err from "./Components/Error";
import Api from "./Components/Api";
import Grid from "./Components/gridTable";

// import "./Css/Formstyle.css";
import { Switch, Route } from "react-router-dom";
import ParentFunction from "./Components/HooksPractice/FunctionalComp1";
import Basecomp from "./Components/HooksPractice/UsingContext";
const Chart = React.lazy(() => import("./Components/Amchart"));
class App extends Component {
  // ref_table = React.createRef();
  // componentDidMount() {
  //   console.log(
  //     "logged in the context of App.js",
  //     this.ref_table.current.state.filtered_data
  //   );
  // }
  render() {
    return (
      <section>
        {/* <ParentFunction /> */}
        <Basecomp />
        {/* <Grid /> */}

        {/* <Counter /> */}
        {/* <Cook/> */}
        {/* <Nav /> */}
        {/* <Suspense fallback={<div className="load">Still Loading…</div>}>
          <Chart /> */}
        {/* <Switch>
            <Route path="/api">
              <Api />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/table">
              <Table ref={this.ref_table} />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="*">
              <Err />
            </Route>
          </Switch> */}
        {/* </Suspense> */}
      </section>
    );
  }
}

export default App;
