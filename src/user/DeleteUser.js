import React, { Component } from "react";

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

    this.deleteFeedAction = this.deleteFeedAction.bind(this);
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
    const data = JSON.parse(JSON.stringify(this.state.users));
    console.log(data);
    this.setState({
      data: data
    });
  }
  deleteFeedAction(e) {
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
                  <button
                    onClick={this.deleteFeedAction}
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
