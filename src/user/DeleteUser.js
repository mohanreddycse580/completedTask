import React, { Component } from "react";
import { Link } from "react-router-dom";
class DeleteUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      users: [
        {
          user_id: "1",
          first_name: "Mohan",
          last_name: "Reddy",
          age: "28",
          gender: "Male",
          address: "GVP"
        },
        {
          user_id: "2",
          first_name: "Reddy",
          last_name: "Mohan",
          age: "30",
          gender: "Male",
          address: "Chennai"
        }
      ],
      checkedItems: new Map()
    };

    this.deletehandleAction = this.deletehandleAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = e.target.name;
    console.log(item);
    const isChecked = e.target.checked;
    console.log(isChecked);
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      let userData = JSON.parse(sessionStorage.getItem("userData"));
      console.log(userData);
      const user = [
        {
          user_id: userData.user_id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          age: userData.age,
          gender: userData.gender,
          address: userData.address
        }
      ];
      this.setState({
        data: user
      });
      //const data = JSON.parse(JSON.stringify(this.state.users));
      console.log(this.state);
      //this.setState({
      // data: data
      //});
    }
  }
  deletehandleAction(e) {
    let updateIndex = e.target.getAttribute("value");
    this.state.data.splice(updateIndex, 1);
    this.setState({ data: this.state.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Display Records</h1>

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
            {this.state.data.map((d, index) => (
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
      </div>
    );
  }
}
export default DeleteUser;
