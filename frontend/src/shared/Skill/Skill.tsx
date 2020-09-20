import React, { useState } from "react";
import { Collapse, Typography, Row, Col, Button } from "antd";
import { EditableInput } from "../Input/Input";
import { Skill, SkillLevelType } from "../../types";
import { StarOutlined, StarFilled, DeleteOutlined } from "@ant-design/icons";
import "./Skill.css";

export const EditableSkill = () => {
  const [skill, setSkill] = useState<Skill>({
    level: SkillLevelType.Novice,
    skillName: "",
  });

  const onSkillNameChanged = (value: string, bindProperty: string) => {
    setSkill({ ...skill, [bindProperty]: value });
  };

  const onSelectedSkillChanged = (levelName: string) => {
    setSkill({ ...skill, level: (SkillLevelType as any)[levelName] });
  };

  const levelNames = Object.keys(SkillLevelType).filter(
    (k) => typeof SkillLevelType[k as any] === "number"
  );

  const { Panel } = Collapse;
  const { Text } = Typography;

  return (
    <>
      <Row
        className="full-width"
        gutter={10}
        align="top"
        justify="space-between"
      >
        <Col span={23}>
          <Collapse
            bordered={true}
            className="widget-skill"
            style={{ width: "100%" }}
          >
            <Panel
              className="widget-skill-panel"
              header={
                <>
                  <div className="widget-skill-name">(Not specified)</div>
                  <Text className="widget-skill-level" type="secondary">
                    {SkillLevelType[skill.level]}
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
                    <div className={`widget-skill-level-active-` + skill.level}>
                      {levelNames.map((level, index) => (
                        <Button
                          onClick={() => onSelectedSkillChanged(level)}
                          key={index}
                          value={level}
                          size="small"
                          shape="circle"
                          type="text"
                          className="widget-skill-level-icon"
                          icon={
                            index <= skill.level ? (
                              <StarFilled
                                style={{ color: "rgb(33, 150, 243)" }}
                              />
                            ) : (
                              <StarOutlined
                                style={{ color: "rgb(33, 150, 243)" }}
                              />
                            )
                          }
                        />
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </Col>
        <Col span={1}>
          <Button
            shape="circle"
            type="text"
            size="small"
            icon={<DeleteOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};
