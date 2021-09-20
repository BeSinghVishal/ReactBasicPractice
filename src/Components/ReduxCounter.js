import { Component } from "react";
import { connect } from "react-redux";
import { Increment, Decrement } from "../Redux/Action/Action";
import store from "../Redux/Store";

class Counter extends Component {
  state = {
    value: 1
  };
  render() {
    return (
      <section className="form">
        <h1>...REDUX COUNTER...</h1>
        <br />
        <h3>enter a number to be increased or decreased</h3>
        <input
          type="number"
          onChange={(e) => this.setState({ value: e.target.value })}
        ></input>
        <br />
        <br />
        <span>{this.props.counter}</span>
        <br />
        <br />
        {/* {console.log(this.props.increment(this.state.value))} */}
        {/* <button
          onClick={() => this.props.dispatch(Increment(this.state.value))}
        >
          Increment +
        </button> */}
        <button
          onClick={
            this.state.value
              ? () => this.props.increment(this.state.value)
              : () => this.props.increment()
          }
        >
          Increment +
        </button>
        <br />
        <br />
        {/* <button
          onClick={() => store.dispatch(Decrement(this.state.value))}
        >
          Decrement -
        </button> */}
        <button
          onClick={
            this.state.value
              ? () => this.props.decrement(this.state.value)
              : () => this.props.decrement()
          }
        >
          Decrement -
        </button>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    increment: (payload) => {
      dispatch(Increment(payload));
    },
    decrement: (payload) => {
      dispatch(Decrement(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Counter);
