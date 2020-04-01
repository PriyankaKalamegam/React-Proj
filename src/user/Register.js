import React, { Component } from "react";
import App from "../App";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formDetails: {
        fullName: "",
        gender: "",
        course: "",
        checkb: ""
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    //alert("The Data Given: " + data);
    console.log("final data is", data);
  };
  handleInputChange = event => {
    event.preventDefault();
    //this.setState({ fullName: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { fullName } = this.state;
    return (
      <div>
        <h1>Form Elements</h1>
        <p>Full Name is : {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Your Name"
              name="fullName"
              onChange={this.handleInputChange}
            />
          </p>
          <p>Gender : </p>
          <p>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleInputChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleInputChange}
            />{" "}
            Female
          </p>
          <p>
            <label>Pick your Course : </label>
            <select name="course" onChange={this.handleInputChange}>
              <option value="Choose One">Choose One</option>
              <option value="React js">React js</option>
              <option value="Vue js">Vue js</option>
              <option value="Angular js">Angular js</option>
              <option value="Node js">Node js</option>
            </select>
          </p>
          <p>
            <label>Terms and Conditions : </label>
            <input
              type="checkbox"
              name="checkb"
              value="agree"
              onChange={this.handleInputChange}
            />
            Agree
            <input
              type="checkbox"
              name="checkb"
              value="disagree"
              onChange={this.handleInputChange}
            />
            DisAgree
          </p>
          <p>
            <button>Display All</button>
          </p>
        </form>
      </div>
    );
  }
}
export default Register;
