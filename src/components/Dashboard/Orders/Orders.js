import React from "react";
import { connect } from "react-redux";
import {placeOrder} from '../../../actions'

class Orders extends React.Component {
  state = {
    toggle_buyrsell: false,
    symbol:'',
    qty:0,
    price:0,
  };
  componentDidMount() {}

  onClickSubmit=(e)=>{
    const { symbol, qty, price } = this.state
    const orderType=this.state.toggle_buyrsell?"sell":"buy"
    this.props.placeOrder({symbol,qty,price,orderType})
  }

  handleChange = (e) => {
    console.log(e.target.name)  
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div>
        <div class="ui top attached tabular menu">
          <a class="active item">
            {this.state.toggle_buyrsell ? "Sell" : "Buy"}
          </a>
          <div class="right menu">
            <div class="item">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="public"
                  value={this.state.toggle_buyrsell}
                  onChange={() =>
                    this.setState({
                      ...this.state,
                      toggle_buyrsell: !this.state.toggle_buyrsell,
                    })
                  }
                />
                <label></label>
              </div>
            </div>
          </div>
        </div>
        <div class="ui bottom attached segment">
          <div class="ui form">
            <div class="fields">
              <div class="field">
                <label>Symbol</label>
                <input type="text" placeholder="Symbol" name="symbol" onChange={this.handleChange}/>
              </div>
              <div class="field">
                <label>Quantity</label>
                <input type="text" placeholder="Quantity" name="qty" onChange={this.handleChange}/>
              </div>
              <div class="field">
                <label>Price</label>
                <input type="text" placeholder="Price" name="price" onChange={this.handleChange}/>
              </div>
              <div class="field"  style={{paddingTop:'25px'}}>
                <button className="ui primary button" onClick={this.onClickSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapsStatetoProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapsStatetoProps, {placeOrder})(Orders);
