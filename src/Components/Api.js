import { Component } from "react";
import { connect } from "react-redux";
import { callApi } from "../Redux/Action/Action";
import "../Css/table.css";

class Api extends Component {
  state = {
    data: []
  };

  datatraverse(obj) {
    const keyarray = Object.keys(obj);
    return keyarray.map((key) => {
      if (typeof obj[key] != "object") {
        return (
          <h1>
            {key} -- {obj[key]}
          </h1>
        );
      } else {
        return (
          <section>
            {key} {this.datatraverse(obj[key])}
          </section>
        );
      }
    });
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => data.json())
    //   .then((vl) => {
    //     this.setState({ data: vl });
    //   });
    this.props.apicall();
  }

  render() {
    return (
      <section className="frm">
        <section className="holder">
          {/* {console.log(this)} */}
          {
            // this.state.data&&this.state.data.map((obj)=>{
            //      return <section className="each">
            //               {this.datatraverse(obj)}
            //               <h3>------------------------------------------------------------</h3>
            //          </section>
            //  })
            // this.props.api.length
            //   ? console.log(this.props.api.length)
            //   : console.log("loading..")

            this.props.api.length
              ? this.props.api.map((obj) => {
                  return (
                    <section key={obj.id} className="each">
                      {this.datatraverse(obj)}
                      <h3>
                        ------------------------------------------------------------
                      </h3>
                    </section>
                  );
                })
              : "Loading...."
          }
        </section>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    api: state.apidata
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    apicall: () => dispatch(callApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
