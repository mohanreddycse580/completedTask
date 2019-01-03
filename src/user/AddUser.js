import React, { Component } from "react";
import "./AddUser.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: "",
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      address: "",
      redirectToReferrer: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const user = {
      user_id: this.state.user_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address
    };
    console.log("user:" + this.state.user_id);
    if (
      this.state.user_id &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.age &&
      this.state.gender &&
      this.state.address
    ) {
      this.setState({
        redirectToReferrer: true
      });

      /*axios.post("userdetails.json", { user }).then(res => {
        console.log(res);
        console.log(res.data);
      }); 
      /*
      fetch("userdetails.json", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(errors => console.log(errors));

       axios
        .put("userdetails.json", {
          body: JSON.stringify(user),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
          console.log(user);
        }); */
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div>
          <h1>Add User</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="col-25">
              <label>User Id</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                name="user_id"
                placeholder="User Id"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z0-9]{6,}"
                title="Must contain at least 6 or more characters"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>First Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={this.handleChange}
                pattern="[a-zA-Z ]{1,10}"
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Last Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z ]{1,10}"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Age</label>
            </div>
            <div class="col-75">
              <input
                type="number"
                name="age"
                min="0"
                max="60"
                placeholder="age"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Gender</label>
            </div>
            <div class="col-75">
              <div onChange={this.handleChange}>
                <input type="radio" value="MALE" name="gender" required />
                Male
                <input type="radio" value="FEMALE" name="gender" required />
                Female
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label>Address </label>
            </div>
            <div class="col-75">
              <textarea
                rows="4"
                cols="25"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z ]{10,100}"
              />
            </div>
          </div>

          <div class="row">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
