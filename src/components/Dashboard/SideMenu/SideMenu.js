import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import history from "../../../history";
import Orders from "../Orders/Orders";
import Holdings from "../Holdings/Holdings";
import SideMenuHeader from "./SideMenuHeader";

class SideMenu extends React.Component{
  render(){return (
    <div className="ui container">
      <Router history={history}>
          <div>
            <SideMenuHeader />
            <Route path="/" exact component={Holdings}></Route>
            <Route path="/orders" component={Orders}></Route>
          </div>
        </Router>
    </div>
  );
  }
}

const mapStatetoProps = (state)=>{
    return {
        ...state
    }
}
export default connect(mapStatetoProps,{})(SideMenu);
