import React from "react";
import { TemplateType } from "../templates";
import { Card, Row, Col } from "antd";

export const Switcher = (props: {
  onTemplateSwitched: (type: TemplateType) => void;
}) => {
  return (
    <div className="app-switcher">
      <Row justify="center" gutter={18}>
        {Object.keys(TemplateType)
          .filter((key) => +key >= 0)
          .map((key: string, index: number) => (
            <Col style={{ marginBottom: "14px" }}>
              <div style={{ textAlign: "center", color: "#fff" }}>
                {TemplateType[index]}
              </div>
              <Card
                size="small"
                style={{
                  width: "110px",
                  height: "140px",
                  cursor: "pointer",
                }}
                onClick={() => props.onTemplateSwitched(index)}
                bordered={true}
              ></Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};
