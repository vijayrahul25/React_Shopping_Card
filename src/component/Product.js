import React, { Component } from "react";
import ReactDOM from "react-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductInCart: {}
    };
  }

  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );    
  }

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;    
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-2">
        <div className="my-list">
          <img width="75px" src={this.props.image} />
          <h3>{this.props.name}</h3>
          <span className="pull-right">SKU:1000{this.props.id}</span>
          <div className="detail">
            <p>
              {this.props.description}
            </p>
            <a
              href="#"
              className="btn btn-info mr-2"
              onClick= {this.addToCart.bind(this, image, name, price, id)}
            >
              Add To Cart
            </a>
            <a href="#" className="btn btn-info">
              Deatil
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
