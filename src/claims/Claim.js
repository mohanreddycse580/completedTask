import React from "react";
import "./claim.css";
import axios from "axios";

class Claim extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      claim: [],
      havingClaims: false
    };
  }

  /*componentWillMount() {
    const loadData = JSON.parse(JSON.stringify(jsonData));
    console.log(loadData);
    this.setState({
      data: loadData
    });
  } */
  componentDidMount() {
    axios.get("claims.json").then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  handleChange = e => {
    console.log(e.target.value);
    //alert(e.target.value);
    if (e.target.value === "") {
      this.setState({
        claim: "",
        havingClaims: false
      });
    } else {
      if (e.target.value === "all") {
        const claim = this.state.data;
        this.setState({
          claim: claim,
          havingClaims: true
        });
      } else {
        const claim = this.state.data.filter(row => {
          return row.user_id.match(e.target.value);
        });
        this.setState({
          claim: claim,
          havingClaims: true
        });
      }
    }
  };
  render() {
    const havingClaims = this.state.havingClaims;
    return (
      <div className="App">
        <h1>CLAIM DETAILS </h1>
        <select onChange={this.handleChange}>
          <option value="" selected>
            Select User
          </option>
          {this.state.data.map(function(claim, key) {
            return (
              <option key={key} value={claim.user_id}>
                {claim.user_id}
              </option>
            );
          })}
          <option value="all">ALL</option>
        </select>
        {havingClaims ? (
          <div className="tableOrder">
            <table>
              <tr>
                <th>ClaimId</th>
                <th>UserId</th>
                <th>ClaimName</th>
                <th>ClaimAmount</th>
                <th>ClaimSubmitedDate</th>
                <th>HospitalName</th>
                <th>ClaimStatus</th>
              </tr>
              {this.state.claim.map((row, index) => (
                <tr>
                  <td>{row.claim_id}</td>
                  <td>{row.user_id}</td>
                  <td>{row.claim_name}</td>
                  <td>{row.claim_amount}</td>
                  <td>{row.claim_submited_date}</td>
                  <td>{row.hospital_name}</td>
                  <td>{row.claim_status}</td>
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

export default Claim;
