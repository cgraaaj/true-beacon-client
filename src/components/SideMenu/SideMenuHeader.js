import React from "react";
import { Link } from "react-router-dom";

class SideMenuHeader extends React.Component {
  render() {
    return (
      <div className="ui large menu">
        <div className="right menu">
          <Link to="/orders" className="item">
            Order
          </Link>
          <Link to="/holdings" className="item">
            Holdings
          </Link>
          <Link to="/" className="item">
            Portfolio
          </Link>
        </div>
      </div>
    );
  }
}

export default SideMenuHeader;
