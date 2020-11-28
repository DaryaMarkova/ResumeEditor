import React, { useState, useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Collapse, Input, MonthDatePicker } from "../../shared";
import { EditableTextarea } from "../../shared/Textarea/Textarea";
import { Education as EducationModel } from "../../types";
import "./index.css";

export const Education = (props: {
  education: EducationModel & { isActive?: boolean };
  onEducationChanged: (education: EducationModel | null) => void;
}) => {
  const { Text } = Typography;
  const [model, setModel] = useState<
    (EducationModel & { isActive?: boolean }) | null
  >(null);

  const onEducationChanged = (
    value: string,
    bindProperty: keyof EducationModel | string
  ) => {
    if (!model) {
      return;
    }

    props.onEducationChanged({ ...model, [bindProperty]: value });
  };

  const getEducationHeader = () => {
    if (model?.school && model.degree) {
      return (
        <span>
          {model.degree}&nbsp;at&nbsp;{model.school}
        </span>
      );
    } else if (model?.school) {
      return <span>{model.school}</span>;
    } else if (model?.degree) {
      return <span>{model.degree}</span>;
    }

    return <b>(Not specified)</b>;
  };

  useEffect(() => {
    setModel(props.education);
  }, [props.education]);

  return (
    <Collapse
      defaultExpanded={model?.isActive}
      onDefaultExpandedChanged={(expanded) => {
        if (model) props.onEducationChanged({ ...model, isActive: expanded });
      }}
      header={
        <div className="widget-education__title">
          {getEducationHeader()}
          <div className="widget-education__dates">
            {model?.startDate} - {model?.endDate}
          </div>
        </div>
      }
      content={
        <>
          <Row gutter={[24, 8]} className="full-width">
            <Col span={12}>
              <Input
                placeholder="School"
                defaultValue={model?.school}
                onInputValueChanged={onEducationChanged}
                bindProperty="school"
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="Degree"
                defaultValue={model?.degree}
                onInputValueChanged={onEducationChanged}
                bindProperty="degree"
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
                <MonthDatePicker
                  onDateChanged={(date) => {
                    onEducationChanged(date, "startDate");
                  }}
                />
                <MonthDatePicker
                  onDateChanged={(date) => {
                    onEducationChanged(date, "endDate");
                  }}
                  isEndDate
                />
              </div>
            </Col>
            <Col span={12}>
              <Input
                placeholder="City"
                defaultValue={model?.city}
                onInputValueChanged={onEducationChanged}
                bindProperty={"city"}
              />
            </Col>
            <Col span={24}>
              <EditableTextarea
                placeholder="Description"
                defaultValue={model?.description}
                bindProperty={"description"}
                onTextareaValueChanged={(value, property) => {
                  onEducationChanged(value, property!);
                }}
              />
            </Col>
          </Row>
        </>
      }
    ></Collapse>
  );
};
