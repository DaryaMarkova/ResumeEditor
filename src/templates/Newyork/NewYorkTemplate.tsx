import React, { FunctionComponent } from "react";
import { Col, Row, Typography } from "antd";
import { TemplateProps } from "../index";
import "./NewYorkTemplate.css";

export const NewYorkTemplate: FunctionComponent<TemplateProps> = ({
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
              <span>{profile.firstName || "First Name"}</span>&nbsp;
              <span>{profile.lastName || "Last Name"}</span>
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
