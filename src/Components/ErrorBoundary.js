import { Component } from "react";
class ErrorBound extends Component {
  state = {
    haveError: false,
  };
  static getDerivedStateFromError(error) {
    return {
      haveError: true,
    };
  }

  render() {
    if (this.state.haveError) {
      return (
        <section>
          <h1>Something went Wrong.....</h1>
        </section>
      );
    }
    return this.props.children;
  }
}
export default ErrorBound;
