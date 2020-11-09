import React, { useState, useEffect } from "react";
import { EmploymentHistory } from "../EmploymentHistory/EmploymentHistory";
import { EmploymentHistory as Employment } from "../../types/";
import { Button, Row, Col } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import "./style.css";

export const EmploymentHistoryList = (props: {
  onEmploymentListChanged?: (
    employmentList: Employment[],
    property: string
  ) => void;
}) => {
  const [employmentHistoryList, setEmploymentHistoryList] = useState<
    Array<Employment & { isActive?: boolean }>
  >([]);

  useEffect(() => {
    if (props.onEmploymentListChanged) {
      props.onEmploymentListChanged(employmentHistoryList, "employmentHistory");
    }
  }, [employmentHistoryList]);

  const addEmployment = () => {
    setEmploymentHistoryList([
      ...employmentHistoryList.map((it) => {
        return { ...it, isActive: false };
      }),
      {
        jobTitle: "",
        employer: "",
        isActive: true,
        startDate: moment().format("MMMM YYYY"),
        endDate: "Present",
      },
    ]);
  };

  const onEmploymentHistoryChanged = (index: number, history: Employment) => {
    setEmploymentHistoryList(
      employmentHistoryList.map((_history, _index) =>
        _index == index ? history : _history
      )
    );
  };

  const onEmploymentHistoryDeleted = (index: number) => {
    setEmploymentHistoryList(
      employmentHistoryList
        .slice(0, index)
        .concat(employmentHistoryList.slice(index + 1))
    );
  };

  return (
    <div className="widget-employmenthistory__list">
      {employmentHistoryList.map((history, index) => (
        <Row key={index} align="middle">
          <Col span={23}>
            <EmploymentHistory
              onEmploymentHistoryChanged={(_history) =>
                onEmploymentHistoryChanged(index, _history)
              }
              history={history}
            />
          </Col>
          <Col span={1}>
            <Button
              type="text"
              shape="circle"
              icon={<DeleteOutlined />}
              size="small"
              onClick={() => onEmploymentHistoryDeleted(index)}
            />
          </Col>
        </Row>
      ))}
      <Button
        type="link"
        className="widget-employmenthistory__list_add"
        onClick={addEmployment}
      >
        <PlusOutlined />
        Add employment
      </Button>
    </div>
  );
};
