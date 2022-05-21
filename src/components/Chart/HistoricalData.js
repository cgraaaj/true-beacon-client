import React from "react";
import { connect } from "react-redux";
import { getHistoricData, setRangeDates, setSymbol } from "../../actions";
import { Dropdown } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
import _ from "lodash";
import Barchart from "./Barchart";
import { Form, Field, FormSpy } from "react-final-form";
import RangeDatePicker from "./RangeDatePicker";

class HistoricalData extends React.Component {
  componentDidUpdate() {
    if (!_.isEmpty(this.props.historicData)) {
      this.renderChart(this.props.historicData);
    }
  }

  renderChart = (historicData) => {
    return (
      <div className="ui one column doubling grid">
        <div className="column">
          <div
            style={{
              paddingBottom: "56.25%" /* 16:9 */,
              position: "relative",
              height: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            >
              <Barchart chartData={historicData} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  onDateSelect = (ranges) => {
    // console.log(ranges);
    this.props.setRangeDates(ranges.rollup);
  };

  onSubmit = (e) => {
    e.preventDefault();
    let historicalData = {
      symbol: this.props.selectedSymbol,
      from_date: this.props.selectedDateRange.startDate,
      to_date: this.props.selectedDateRange.endDate,
    };
    this.props.getHistoricData(historicalData);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui two column centered grid">
            <div className="column">
              <Dropdown
                placeholder="Select Symbol"
                fluid
                selection
                scrolling
                options={this.props.symbols}
                onChange={(e, data) => {
                  this.props.setSymbol(data.value);
                }}
              />
            </div>
            <div className="column">
              <RangeDatePicker onDateSelect={this.onDateSelect} />
            </div>
            <button className="ui primary button" onClick={this.onSubmit}>
              Submit
            </button>
          </div>
        </form>
        {!_.isEmpty(this.props.historicData) ? (
          this.renderChart(this.props.historicData)
        ) : null}
      </div>
    );
  }
}

const mapsStatetoProps = (state) => {
  console.log(state.data.historicData)
  return {
    symbols: state.data.symbols,
    selectedSymbol: state.data.selectedSymbol,
    selectedDateRange: state.data.selectedDateRange,
    historicData: state.data.historicData,
  };
};

export default connect(mapsStatetoProps, {
  getHistoricData,
  setRangeDates,
  setSymbol,
})(HistoricalData);
