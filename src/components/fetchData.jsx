import React, { Component } from "react";
import axios from "axios";

class FetchData extends Component {
  constructor() {
    super();
    this.state = { apiData: [] };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => this.setState({ apiData: res.data.data }))
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    return (
      <div>
        {this.state.apiData.map((user) => (
          <img key={user.id} src={user.avatar} alt={user.first_name} />
        ))}
      </div>
    );
  }
}

export default FetchData;
