import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Data/product.json";
import Product from "./Product.js";
import Header from "./Header.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      category: [],
      totalItems: 0,
      totalAmount: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleTotalItems = this.handleTotalItems.bind(this);
    this.handleTotalAmount = this.handleTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  }

  handleAddToCart(Product) {
    let cartItem = this.state.cart;
    let productID = Product.id;
    let productQty = Product.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(Product);
    }
    this.setState({
      cart: cartItem
    });

    this.handleTotalItems(this.state.cart);
    this.handleTotalAmount(this.state.cart);
  }
  handleTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  handleTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }

  componentWillMount() {
    this.setState({
      products: Data
    });
  }
  render() {
    return (
      <div className="container">
        <Header totalItems={this.state.totalItems} />

        <div class="row">
          {this.state.products.map(item => {
            return (
              <Product
                key={item.id}
                {...item}
                addToCart={this.handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
