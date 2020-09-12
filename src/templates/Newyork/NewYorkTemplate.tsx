import React, { FunctionComponent } from "react";
import { Col, Row, Typography } from "antd";
import { TemplateProps } from "../index";
import { PhoneOutlined } from "@ant-design/icons";
import { ProfileDefaults } from "../../types";
import "./NewYorkTemplate.css";

export const NewYorkTemplate: FunctionComponent<TemplateProps> = ({
  profile,
}) => {
  const { Title, Text, Paragraph } = Typography;

  return (
    <div>
      <div className="template-newyork">
        <Row align="middle" justify="space-around" gutter={10}>
          <Col>
            <img
              className="template-newyork-avatar"
              width={80}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>

        <Row align="middle" justify="space-around">
          <div className="text-centered">
            <Title level={4} className="template-newyork-name">
              <span>{profile.firstName || ProfileDefaults.firstName}</span>
              &nbsp;
              <span>{profile.lastName || ProfileDefaults.lastName}</span>
            </Title>
            <Text className="template-newyork-position">
              <span>{profile.jobTitle || ProfileDefaults.jobTitle}</span>
            </Text>
            <Text className="template-newyork-phone">
              <PhoneOutlined />
              {profile.phone || ProfileDefaults.phone}
            </Text>
          </div>
        </Row>

        <Row gutter={10} style={{ marginTop: "30px" }}>
          <Col className="text-centered" span={6}>
            <Text
              strong
              className="template-newyork-title-details text-upper-case"
            >
              Details
            </Text>
            <Paragraph style={{ marginBottom: "0px" }}>
              {profile.phone || ProfileDefaults.phone}
            </Paragraph>
            <Text>{profile.email || ProfileDefaults.email}</Text>
          </Col>
          <Col span={18}></Col>
        </Row>
      </div>
    </div>
  );
};
