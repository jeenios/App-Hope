import React, { Component, Fragment } from "react";

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="data:image/png;base64,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"
              alt="Logo Brand"
            />
          </div>
          <div className="trolley"></div>
        </div>
        <div className="card">
          <div className="img-thumb-prod">
            <img
              src="https://thegorbalsla.com/wp-content/uploads/2019/03/Resep-ayam-bakar-empuk.jpg"
              alt="Ayam Bakar"
            />
          </div>
          <p className="product-title">Ayam Bakar Pedas Hot</p>
          <p className="product-price">Rp. 100.000</p>
          <div className="counter">
            <button className="minus">-</button>
            <input type="text" value={3} />
            <button className="plus">+</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Product;
