import React, { Component } from "react";
import { Link } from "react-router-dom";
class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.deletehandleAction = this.deletehandleAction.bind(this);
  }
  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      console.log(userData);

      console.log(this.state);
      this.setState({
        users: userData
      });
    }
  }
  deletehandleAction(e) {
    let updateIndex = e.target.getAttribute("value");
    this.state.users.splice(updateIndex, 1);
    this.setState({ users: this.state.users });
    sessionStorage.setItem("userData", JSON.stringify(this.state.users));
  }

  render() {
    return (
      <div className="App">
        {this.state.users.length > 0 ? (
          <h1>Display User Records</h1>
        ) : (
          <h1> No User Records</h1>
        )}

        {this.state.users.length > 0 ? (
          <div className="tableOrder">
            <table>
              <tr>
                <th>User ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Operation</th>
              </tr>
              {this.state.users.map((d, index) => (
                <tr>
                  <td>{d.user_id}</td>
                  <td>{d.first_name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.age}</td>
                  <td>{d.gender}</td>
                  <td>{d.address}</td>

                  <td>
                    <Link to="/edit">
                      <button type="button">Edit</button>
                    </Link>
                    <button
                      onClick={this.deletehandleAction}
                      id={d.user_id}
                      value={index}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default DeleteUser;
