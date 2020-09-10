import React, { FunctionComponent } from "react";
import { Col, Row, Typography } from "antd";
import { IProfile } from "../types";
import "./newyork.css";

export const TemplateNewYork: FunctionComponent<{ profile: IProfile }> = ({
  profile,
}) => {
  const { Title, Paragraph } = Typography;

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
            <Title level={3} className="name">
              <span>Darya</span>&nbsp;<span>Markova</span>
            </Title>
            <Paragraph className="position">
              <span>{profile.jobTitle || "Job Title"}</span>
            </Paragraph>
          </div>
        </Row>
      </div>
    </div>
  );
};
