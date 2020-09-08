import React, { FunctionComponent } from "react";
import { Col, Row, Typography } from "antd";
import "./newyork.css";

export const TNewYork: FunctionComponent = () => {
  return (
    <div>
      <div className="template-newyork">
        <Row align="middle" justify="space-around" gutter={10}>
          <Col>
            <img
              className="avatar"
              width={80}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-around">
          <div>
            <Typography.Title level={3} className="name">
              <span>Darya</span>&nbsp;<span>Markova</span>
            </Typography.Title>
            <Typography.Paragraph className="position">
              <span>Software Engineer</span>
            </Typography.Paragraph>
          </div>
        </Row>
      </div>
    </div>
  );
};
