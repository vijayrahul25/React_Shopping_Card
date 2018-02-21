import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart.js";
import { findDOMNode } from "react-dom";
import $ from 'jquery';

class Header extends Component {
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };
  render() {
    return (
      <nav>
        <div class="container">
         
          <a href="#" id="cart" onClick={this.handleToggle}>
                <i class="glyphicon glyphicon-shopping-cart" /> Cart{" "}
                <span class="badge">{this.props.totalItems}</span>
              </a>
              <div 
                style={{
                  position: 'absolute',
                  backgroundColor: '#EEE',
                  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                  border: '1px solid #CCC',
                  borderRadius: 3,
                  marginLeft: -5,
                  marginTop: 5,
                  padding: 10,
                  display:'none'                  ,
                  zIndex: 10,
                  
                }}
                ref='toggle'
              >
              <Cart totalItems={this.props.totalItems} cartItems={this.props.cartItems} />
              
          </div>
             
          <hr />
        </div>
      </nav>
    );
  }
}
export default Header;
