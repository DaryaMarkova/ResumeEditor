import React, { useState } from "react";
import { TemplateType } from "../templates";
import { Card, Row, Col } from "antd";
import "./switcher.css";

export const Switcher = (props: {
  onTemplateSwitched: (type: TemplateType) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const templateSwitched = (index: number) => {
    setSelectedIndex(index);
    props.onTemplateSwitched(index);
  };

  return (
    <div className="app-switcher">
      <Row justify="center" gutter={18}>
        {Object.keys(TemplateType)
          .filter((key) => +key >= 0)
          .map((key: string, index: number) => (
            <Col style={{ marginBottom: "14px" }}>
              <div className="title">{TemplateType[index]}</div>
              <Card
                className={index === selectedIndex ? "tile active" : "tile"}
                size="small"
                onClick={() => templateSwitched(index)}
                bordered={true}
              ></Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};
