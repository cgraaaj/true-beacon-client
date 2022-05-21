import React, { useState } from "react";
import moment from "moment";
import {
  DateRangePicker,
  defaultStaticRanges,
  createStaticRanges
} from "react-date-range";
import { useTheme } from "@material-ui/core/styles";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function RangeDatePicker({onDateSelect}) {
  const theme = useTheme();
  const [ranges, setRanges] = useState([
    {
      startDate: null,
      endDate: null,
      key: "rollup"
    }
  ]);

  const staticRanges = createStaticRanges([
    ...defaultStaticRanges,
    {
      label: "This Year",
      range: () => ({
        startDate: moment()
          .startOf("year")
          .toDate(),
        endDate: moment()
          .endOf("day")
          .toDate()
      })
    },
    {
      label: "Last Year",
      range: () => ({
        startDate: moment()
          .subtract(1, "years")
          .startOf("year")
          .toDate(),
        endDate: moment()
          .subtract(1, "years")
          .endOf("year")
          .toDate()
      })
    }
  ]);

  return (
    <DateRangePicker
      startDatePlaceholder="Start Date"
      endDatePlaceholder="End Date"
      ranges={ranges}
      onChange={ranges => {
        setRanges([ranges.rollup])
        onDateSelect(ranges)
      }}RangeDatePicker
      staticRanges={staticRanges}
      inputRanges={[]}
      minDate={new Date('2017-01-02')}
      maxDate={new Date('2021-12-31')}
    />
  );
}

export default RangeDatePicker;
