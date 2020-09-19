import React, { useState } from "react";
import { Collapse, Typography, Row, Col, Radio } from "antd";
import { EditableInput } from "../Input/Input";
import { Skill, SkillLevelType } from "../../types";
import { RadioChangeEvent } from "antd/lib/radio";
import "./Skill.css";

export const EditableSkill = () => {
  const [skill, setSkill] = useState<Skill>({
    level: SkillLevelType.Novice,
    skillName: "",
  });

  const onSkillNameChanged = (value: string, bindProperty: string) => {
    setSkill({ ...skill, [bindProperty]: value });
  };

  const onSelectedSkillChanged = (event: RadioChangeEvent) => {
    setSkill({ ...skill, level: (SkillLevelType as any)[event.target.value] });
  };

  const levelNames = Object.keys(SkillLevelType).filter(
    (k) => typeof SkillLevelType[k as any] === "number"
  );

  const { Panel } = Collapse;
  const { Text } = Typography;

  return (
    <Collapse className="widget-skill" style={{ width: "100%" }}>
      <Panel
        className="widget-skill-panel"
        header={
          <>
            <div className="widget-skill-name">(Not specified)</div>
            <Text className="widget-skill-level" type="secondary">
              Level
            </Text>
          </>
        }
        key="1"
      >
        <Row gutter={24}>
          <Col span={12}>
            <EditableInput
              onInputValueChanged={onSkillNameChanged}
              placeholder="Skill"
              defaultValue={skill.skillName}
              bindProperty="skillName"
            />
          </Col>
          <Col>
            <div style={{ paddingTop: "4px" }}>
              <Text className="widget-skill-level-text" type="secondary">
                Level&nbsp;&mdash;&nbsp;
                {SkillLevelType[skill.level]}
              </Text>
              <Radio.Group onChange={onSelectedSkillChanged}>
                {levelNames.map((level, index) => (
                  <Radio.Button
                    className="widget-skill-level-btn"
                    key={index}
                    value={level}
                  ></Radio.Button>
                ))}
              </Radio.Group>
            </div>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};
