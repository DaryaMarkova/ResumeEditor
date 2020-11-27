import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Collapse, Input, MonthDatePicker } from "../../shared";
import { EditableTextarea } from "../../shared/Textarea/Textarea";
import { Education as EducationModel } from "../../types";
import "./index.css";

export const Education = (props: {
  education: EducationModel & { isActive?: boolean };
}) => {
  const { Text } = Typography;
  const [model, setModel] = useState<
    (EducationModel & { isActive?: boolean }) | null
  >(null);

  return (
    <Collapse
      defaultExpanded={!!model?.isActive}
      onDefaultExpandedChanged={() => {}}
      header={<div className="widget-education__title">Some title</div>}
      content={
        <>
          <Row gutter={[24, 8]} className="full-width">
            <Col span={12}>
              <Input
                placeholder="School"
                defaultValue={model?.school}
                onInputValueChanged={() => {}}
                bindProperty={"school"}
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Degree"
                defaultValue={model?.degree}
                onInputValueChanged={() => {}}
                bindProperty={"degree"}
              />
            </Col>
          </Row>
          <Row gutter={[24, 8]} className="full-width">
            <Col span={12}>
              <Text
                type="secondary"
                className="widget-employmenthistory__label"
              >
                Start & End Date
              </Text>
              <div className="widget-employmenthistory__dates">
                <MonthDatePicker onDateChanged={(date) => {}} />
                <MonthDatePicker isEndDate onDateChanged={(date) => {}} />
              </div>
            </Col>
            <Col span={12}>
              <Input
                placeholder="City"
                defaultValue={model?.city}
                onInputValueChanged={() => {}}
                bindProperty={"city"}
              />
            </Col>
            <Col span={24}>
              <EditableTextarea
                placeholder="Description"
                defaultValue={model?.description}
                bindProperty={"description"}
                onTextareaValueChanged={(value, property) => {}}
              />
            </Col>
          </Row>
        </>
      }
    ></Collapse>
  );
};
