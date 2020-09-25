import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import classNames from "classnames";
import "./Collapse.css";

export const Collapse = (props: {
  defaultExpanded?: boolean;
  header: JSX.Element;
  content: JSX.Element;
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  useEffect(() => {
    setExpanded(!!props.defaultExpanded);
  }, [props.defaultExpanded]);

  return (
    <div
      className={classNames("widget-collapse full-width", {
        expanded: expanded,
      })}
    >
      <div className={classNames("widget-collapse-header bordered")}>
        <Row align="middle">
          <Col span={23}>{props.header}</Col>
          <Col span={1}>
            <Button
              size="small"
              type="text"
              shape="circle"
              onClick={toggleExpanded}
              icon={
                expanded ? (
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
