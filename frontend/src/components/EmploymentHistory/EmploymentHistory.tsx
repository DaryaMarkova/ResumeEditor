import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Collapse, Input, MonthDatePicker } from "../../shared";
import { EmploymentHistory as Employment } from "../../types";
import "./EmploymentHistory.css";
import { EditableTextarea } from "../../shared/Textarea/Textarea";

export const EmploymentHistory = (props: {
  history: Employment & { isActive?: boolean };
  onEmploymentHistoryChanged: (employment: Employment) => void;
}) => {
  const { Text } = Typography;
  const [history, setHistory] = useState<
    (Employment & { isActive?: boolean }) | null
  >(null);

  useEffect(() => {
    setHistory(props.history);
  }, [props.history]);

  const onEmploymentChanged = (
    value: string,
    bindProperty: keyof Employment | string
  ) => {
    if (!history) {
      return;
    }

    props.onEmploymentHistoryChanged({ ...history, [bindProperty]: value });
  };

  const getEmploymentHeader = () => {
    const { jobTitle, employer } = props.history;

    if (jobTitle) {
      if (employer) {
        return (
          <b>
            {history?.jobTitle}&nbsp;at&nbsp;{history?.employer}
          </b>
        );
      } else {
        return <div>{history?.jobTitle}</div>;
      }
    } else if (employer) {
      return <b>{history?.employer}</b>;
    }

    return <b>(Not specified)</b>;
  };

  // <b>&nbsp;at&nbsp;</b><b>{history?.employer}</b>
  return (
    <Collapse
      defaultExpanded={!!history?.isActive}
      header={
        <>
          <div className="widget-employmenthistory-title">
            {getEmploymentHeader()}
          </div>
          <Text className="widget-employmenthistory-dates" type="secondary">
            Sep 2017 - Aug 2019
          </Text>
        </>
      }
      content={
        <>
          <Row gutter={[24, 8]} className="full-width">
            <Col span={12}>
              <Input
                placeholder="Job title"
                defaultValue={history?.jobTitle}
                onInputValueChanged={onEmploymentChanged}
                bindProperty={"jobTitle"}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Employer"
                defaultValue={history?.employer}
                onInputValueChanged={onEmploymentChanged}
                bindProperty={"employer"}
              />
            </Col>
          </Row>
          <Row gutter={[24, 8]} className="full-width">
            <Col span={12}>
              <Text
                type="secondary"
                className="widget-employmenthistory__label"
              >
                Start & End Date
              </Text>
              <div className="widget-employmenthistory__dates">
                <MonthDatePicker
                  onDateChanged={(date) => {
                    onEmploymentChanged(date, "startDate");
                  }}
                />
                <MonthDatePicker
                  isEndDate
                  onDateChanged={(date) => {
                    onEmploymentChanged(date, "endDate");
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <Input
                placeholder="City"
                defaultValue={history?.city}
                onInputValueChanged={onEmploymentChanged}
                bindProperty={"city"}
              />
            </Col>
            <Col span={24}>
              <EditableTextarea
                placeholder="Description"
                defaultValue={history?.description}
                bindProperty={"description"}
                onTextareaValueChanged={(value, property) => {
                  if (property) {
                    onEmploymentChanged(value, property);
                  }
                }}
              />
            </Col>
          </Row>
        </>
      }
    ></Collapse>
  );
};
