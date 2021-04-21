import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div style={{ border: "1px solid gray", margin: "5px" }}>
        <h2>This is {this.props.user.name}</h2>
        <h3>{this.props.user.username}</h3>
        <button onClick={() => this.props.handleAddToCart(this.props.user)}>
          Add Me
        </button>
      </div>
    );
  }
}

export default User;
