import React, { FunctionComponent } from "react";
import { Row, Col, Typography } from "antd";
import { TemplateProps } from "../index";
import { ProfileDefaults } from "../../types";
import "./StockholmTemplate.css";

export const StockholmTemplate: FunctionComponent<TemplateProps> = ({
  profile,
}) => {
  const { Title, Paragraph, Text, Link } = Typography;

  return (
    <div className="template-stockholm">
      <Row gutter={10} align="middle">
        <Col>
          <img
            alt="avatar"
            className="avatar"
            width={80}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={18}>
          <Title level={3} className="name">
            <span>{profile.firstName || ProfileDefaults.firstName}</span>&nbsp;
            <span>{profile.lastName || ProfileDefaults.lastName}</span>
          </Title>
          <Paragraph className="position">
            <span>{profile.jobTitle || ProfileDefaults.jobTitle}</span>
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={18}></Col>
        <Col span={6}>
          <Text strong>Details</Text>
          <Paragraph style={{ marginBottom: "0px" }}>
            {profile.phone || ProfileDefaults.phone}
          </Paragraph>
          <Link>{profile.email || ProfileDefaults.email}</Link>
        </Col>
      </Row>
    </div>
  );
};
