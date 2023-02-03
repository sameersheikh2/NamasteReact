import { Component } from "react";
import ProfileClass from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("parent constructor");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("interval running");
    }, 1000);

    console.log("parent did mount");
  }
  componentDidUpdate() {
    console.log("parent did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        {console.log("parent render")}
        <h1>This is class based component</h1>;
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count plus
        </button>
        <h2>{this.state.count}</h2>
        <ProfileClass demo="nice" />
      </>
    );
  }
}

export default About;
