import React from "react";
import { Link } from "react-router-dom";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <h1>Shipping & Delivery</h1>
          <span>
            Shipping is not applicable for business.
          </span>
        </div>
      </div>
    );
  }
}

export default MainBanner;
