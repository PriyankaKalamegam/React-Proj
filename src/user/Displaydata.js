import React, { Component } from "react";

class Displaydata extends Component {
  constructor(props) {
    super(props);
  }

  renderpopup = () => {
    console.log("**************", this.props);
    return (
      <div>
        <p>Fullname: {this.props.parentstate.fullName}</p>
        <p>Gender: {this.props.parentstate.gender}</p>
        <p>Course Selected: {this.props.parentstate.course}</p>
        <p>Agreed on terms?: {this.props.parentstate.checkb}</p>
      </div>
    );
  };
  render() {
    return this.renderpopup();
  }
}
export default Displaydata;
