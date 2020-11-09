import React, { useEffect, useState, useRef } from "react";
import { DatePicker, Switch } from "antd";
import { Moment } from "moment";
import moment from "moment";
import "./style.css";

export const MonthPicker = (props: {
  isEndDate?: boolean;
  onDateChanged?: (date: string) => void;
}) => {
  const datePickerRef = useRef<any>(null); // type ?
  const [present, setPresent] = useState<boolean>(false);
  const [value, setValue] = useState<Moment | null>(moment());

  const onPickerValueChanged = (value: Moment | null) => {
    setValue(value);

    if (props.onDateChanged) {
      props.onDateChanged(moment(value).format("MMMM YYYY"));
    }
  };

  useEffect(() => {
    if (present && datePickerRef && datePickerRef.current) {
      setValue(null);

      if (props.onDateChanged) {
        props.onDateChanged("Present");
      }

      datePickerRef.current?.blur();
    }
  }, [present]);

  return (
    <div className="monthpicker">
      {/* {present && (
        <div className="monthpicker__presenttext">
          <span>Present&nbsp;&mdash;&nbsp;</span>
        </div>
      )} */}
      <DatePicker
        ref={datePickerRef}
        format="MMM, YYYY"
        picker="month"
        value={value}
        style={{ width: "120px" }}
        onChange={onPickerValueChanged}
        renderExtraFooter={() => {
          if (!props.isEndDate) {
            return null;
          }

          return (
            <div className="monthpicker__footer">
              <Switch
                size="small"
                onChange={() => {
                  setPresent(!present);
                }}
              ></Switch>
              <span className="monthpicker__label">Currently work here </span>
            </div>
          );
        }}
      />
      <div className="monthpicker__bar"></div>
    </div>
  );
};
