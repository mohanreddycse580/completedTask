import React, { Component } from "react";
import "./AddUser.css";
import { Redirect } from "react-router-dom";

class EditUser extends Component {
  constructor(props) {
    super(props);
    //alert("con " + this.props.match.params.value);
    this.state = {
      users: [],
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

      const index = this.state.users.findIndex(
        data => data.user_id === user.user_id
      );
      const users = [...this.state.users];
      users[index] = user;
      this.setState({ users });

      sessionStorage.setItem("userData", JSON.stringify(users));
    }
  };
  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      let index = this.props.match.params.value;
      console.log(userData[index]);
      let indexUserData = userData[index];
      this.setState({
        users: userData,
        user_id: indexUserData.user_id,
        first_name: indexUserData.first_name,
        last_name: indexUserData.last_name,
        age: indexUserData.age,
        gender: indexUserData.gender,
        address: indexUserData.address
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/delete"} />;
    }
    return (
      <div>
        <div>
          <h1>Update User</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="col-25">
              <label>User Id</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                value={this.state.user_id}
                name="user_id"
                placeholder="User Id"
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
                value={this.state.first_name}
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
                value={this.state.last_name}
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
                value={this.state.age}
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
            <input type="submit" value="update" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditUser;
