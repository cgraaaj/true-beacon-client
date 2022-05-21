import React from "react";
import { connect } from "react-redux";
import { getHoldings } from "../../../actions";
import _ from "lodash"

class Holdings extends React.Component {
  componentDidMount() {
    this.props.getHoldings();
  }

  renderRows = () => {
    return this.props.holdings.map((row) => {
      return (
        <tr>
          <td>{row["tradingsymbol"]}</td>
          <td>{row["quantity"]}</td>
          <td>{row["average_price"]}</td>
          <td>{row["last_price"]}</td>
          <td>{row["close_price"]}</td>
          <td>{row["pnl"].toFixed(2)}</td>
          <td>{row["day_change"].toFixed(2)}</td>
          <td>{row["day_change_percentage"].toFixed(2)+'%'}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="ui striped table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg.cost</th>
              <th>LTP</th>
              <th>Cur.val</th>
              <th>P&L</th>
              <th>Day chg</th>
              <th>Day chg %</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>

        <div className="ui card">
          <div className="content">
            <div className="header">Total P&L</div>
            <div className="description">
              {!_.isEmpty(this.props.holdings)?this.props.holdings.reduce((acc,row)=>acc['pnl']+row['pnl']).toFixed(2):0}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapsStatetoProps = (state) => {
  return {
    holdings: state.holdings.data,
  };
};

export default connect(mapsStatetoProps, { getHoldings })(Holdings);
