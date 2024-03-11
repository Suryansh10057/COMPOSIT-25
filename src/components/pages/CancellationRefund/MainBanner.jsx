import React from "react";
import { Link } from "react-router-dom";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <h1>Cancellation & Refund</h1>
          <span>
            No Cancellation and Refunds are entertained.
          </span>
        </div>
      </div>
    );
  }
}

export default MainBanner;
