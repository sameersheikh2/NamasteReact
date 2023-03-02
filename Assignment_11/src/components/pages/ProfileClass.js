import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
   }

  componentDidMount() {
    console.log("child mount");
  }

  render() {
    return (
      <>
        {console.log("child render")}
        <h2>Profile class based components</h2>;<h2>{this.props.demo}</h2>
      </>
    );
  }
}

export default ProfileClass;
