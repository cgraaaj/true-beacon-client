import React from "react";
import { Link } from "react-router-dom";

class SideMenuHeader extends React.Component {

  state={
    activeItem:'portfolio'
  }
  
  onClickTab=(e)=>{
    this.setState({
      ...this.state,activeItem:e.target.name
    })
  }

  render() {
    return (
      <div className="ui large menu">
        <div className="right menu">
          <Link to="/orders" className={`${this.state.activeItem === 'orders'? "active":''} item`} name="orders" onClick={this.onClickTab}>
            Order
          </Link>
          <Link to="/" className={`${this.state.activeItem === 'holdings'? "active":''} item`} name ="holdings" onClick={this.onClickTab}>
            Holdings
          </Link>
        </div>
      </div>
    );
  }
}



export default SideMenuHeader;
