import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./Collapse.css";

export const Collapse = (props: {
  defaultExpanded?: boolean;
  onDefaultExpandedChanged: (isExpanded: boolean) => void;
  header: JSX.Element;
  content: JSX.Element;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => setIsExpanded(!!props.defaultExpanded), [
    props.defaultExpanded,
  ]);

  return (
    <div
      className={classNames(
        "widget-collapse full-width",
        {
          expanded: props.defaultExpanded,
        },
        {
          shortened: !props.defaultExpanded,
        }
      )}
    >
      <div className={classNames("widget-collapse-header bordered")}>
        <Row align="middle">
          <Col span={23}>{props.header}</Col>
          <Col span={1}>
            <Button
              size="small"
              type="text"
              shape="circle"
              onClick={() => props.onDefaultExpandedChanged(!isExpanded)}
              icon={
                props.defaultExpanded ? (
                  <UpOutlined className="widget-collapse-icon" />
                ) : (
                  <DownOutlined className="widget-collapse-icon" />
                )
              }
            />
          </Col>
        </Row>
      </div>
      <div className="widget-collapse-content bordered">{props.content}</div>
    </div>
  );
};
