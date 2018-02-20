import React, { Component } from "react";
import ReactDOM from "react-dom";

class Cart extends Component {
  render() {
    let cartItems;
    if (this.props.totalItems > 0 ) {
      cartItems = this.props.cartItems.map(product => {
        return (
          <ul className=" list-unstyled unstyled">
          <li className="cart-item" key={product.name}>
            <div class="row">
              <div class="col-sm-4"><img width="25px" className="product-image" src={product.image} />{product.name}</div>
              <div class="col-sm-2">{product.price}</div>
              <div class="col-sm-2"><p className="quantity">{product.quantity} {product.quantity > 1 ? "Nos." : "No."} </p></div>
              <div class="col-sm-2"><p className="amount">{product.quantity * product.price}</p></div>
            </div>           
          </li>
          </ul>
        )
      });
    } 
    return (<div>
      { cartItems}
      </div>
    )
  }
}

export default Cart;