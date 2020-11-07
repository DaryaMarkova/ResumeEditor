import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Collapse, Input, MonthDatePicker } from "../../shared";
import { EmploymentHistory as Employment } from "../../types";
import "./EmploymentHistory.css";

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
    // setHistory({ ...history, [bindProperty]: value });
  };

  return (
    <Collapse
      defaultExpanded={!!history?.isActive}
      header={
        <>
          <div className="widget-employmenthistory-title">
            {"(Not specified)"}
          </div>
          <Text className="widget-employmenthistory-dates" type="secondary">
            Sep 2017 - Aug 2019
          </Text>
        </>
      }
      content={
        <Row gutter={24} className="full-width">
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
          <Col span={6}>
            <MonthDatePicker />
          </Col>
          <Col span={6}>
            <MonthDatePicker isEndDate={true} />
          </Col>
        </Row>
      }
    ></Collapse>
  );
};
