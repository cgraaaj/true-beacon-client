import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default class Barchart extends PureComponent {
  getOptions() {
    let data = this.props.chartData.map((data) => ({
      x: new Date(data.date),
      y: parseInt(data.price),
    }));
    console.log(data);
    return {
      title: {
        text: "",
      },
      yAxis: {
        name: "prices",
      },
      xAxis: {
        type: "datetime",
        name: "dates",
        labels: {
          format: "{value:%Y-%m-%d}",
        },
      },
      series: [
        {
          name: "Historical Data",
          data: data,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={this.getOptions()} />
      </div>
    );
  }
}
