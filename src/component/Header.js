import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="container">
          <ul class="navbar-left">
            <li>
              <a href="#" id="cart">
                <i class="glyphicon glyphicon-shopping-cart" /> Cart{" "}
                <span class="badge">{this.props.totalItems}</span>
              </a>
            </li>
          </ul>
          
          <hr />
        </div>
      </nav>
    );
  }
}
export default Header;
