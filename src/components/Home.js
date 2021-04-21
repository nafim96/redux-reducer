import React, { Component } from "react";
import User from "./User";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      cart: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(user) {
    console.log(user);
    const newCart = [...this.state.cart, user];
    this.setState({ cart: newCart });
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ user: data }));
  }
  render() {
    return (
      <div>
        <h1>User:{this.state.user.length}</h1>
        <h3>Add Cart {this.state.cart.length}</h3>
        {this.state.user.map((user) => (
          <User
            key={user.id}
            user={user}
            handleAddToCart={this.handleAddToCart}
          />
        ))}
      </div>
    );
  }
}

export default Home;
