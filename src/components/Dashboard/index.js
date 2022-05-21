import React from "react";
import { connect } from "react-redux";
import { getHistoricData, setRangeDates, setSymbol } from "../../actions";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import Barchart from "./Chart/Barchart";
import RangeDatePicker from "./Chart/RangeDatePicker";
import SideMenu from "./SideMenu/SideMenu"
import Modal from "../Modal";

class Dashboard extends React.Component {
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
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui two column grid">
            <div className="six wide column">
              <div className="ui segments">
                <div className="ui segment">
                  <div className="row">
                    <div className="column">
                      <div className="ui grid">
                        <div className="center alligned two column row">
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
                            <button
                              className="ui primary button"
                              onClick={this.onSubmit}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui segment">
                <div className="row">
                  <RangeDatePicker onDateSelect={this.onDateSelect} />
                </div>
              </div>
            </div>
            <div className="ten wide column">
                <SideMenu/>
            </div>
          </div>
        </div>
        <div className="ui segment">
          {!_.isEmpty(this.props.historicData)
            ? this.renderChart(this.props.historicData)
            : null}
        </div>
        {this.props.modal.flag &&
          (this.props.modal.example || this.props.modal.synonyms) ? (
          <Modal
            example={this.props.modal.example}
            synonyms={this.props.modal.synonyms}
            onDismiss={() => {
              this.props.setModal({
                flag: !this.props.modal.flag,
                example: "",
                synonyms: [],
              });
            }}
          />
        ) : null}
      </div>
    );
  }
}

const mapsStatetoProps = (state) => {
  console.log(state.data.historicData);
  return {
    symbols: state.data.symbols,
    selectedSymbol: state.data.selectedSymbol,
    selectedDateRange: state.data.selectedDateRange,
    historicData: state.data.historicData,
    modal: state.data.modal,
  };
};

export default connect(mapsStatetoProps, {
  getHistoricData,
  setRangeDates,
  setSymbol,
})(Dashboard);
