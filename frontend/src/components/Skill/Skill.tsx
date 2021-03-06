import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";
import { EditableInput } from "../../shared/Input/Input";
import { Skill, SkillLevelType } from "../../types";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Collapse } from "../../shared";
import "./Skill.css";

export const EditableSkill = (props: {
  skill: Skill & { isActive?: boolean };
  onSkillChanged: (skill: Skill & { isActive?: boolean }) => void;
}) => {
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    setSkill(props.skill);
  }, [props.skill]);

  const onSkillNameChanged = (
    value: string,
    bindProperty: keyof Skill | string
  ) => {
    if (!skill) {
      return;
    }
    props.onSkillChanged({ ...skill, [bindProperty]: value });
  };

  const onSkillLevelChanged = (levelName: string) => {
    if (!skill) {
      return;
    }

    props.onSkillChanged({
      ...skill,
      level: (SkillLevelType as any)[levelName],
    });
  };

  const levelNames = Object.keys(SkillLevelType).filter(
    (k) => typeof SkillLevelType[k as any] === "number"
  );

  const { Text } = Typography;

  if (!skill) {
    return null;
  }

  return (
    <Collapse
      defaultExpanded={props.skill.isActive}
      onDefaultExpandedChanged={(expanded) =>
        props.onSkillChanged({ ...skill, isActive: expanded })
      }
      header={
        <>
          <div className="widget-skill-name">
            {skill.skillName || "(Not specified)"}
          </div>
          <Text className="widget-skill-level" type="secondary">
            {SkillLevelType[skill.level]}&nbsp;
          </Text>
        </>
      }
      content={
        <Row gutter={24} className="full-width">
          <Col span={12}>
            <EditableInput
              onInputValueChanged={onSkillNameChanged}
              placeholder="Skill"
              defaultValue={skill.skillName}
              bindProperty="skillName"
            />
          </Col>
          <Col span={12}>
            <div style={{ paddingTop: "4px" }}>
              <Text className="widget-skill-level-text" type="secondary">
                Level&nbsp;&mdash;&nbsp;
                {SkillLevelType[skill.level]}
              </Text>
              <div className={`widget-skill-level-active-` + skill.level}>
                {levelNames.map((level, index) => (
                  <Button
                    onClick={() => onSkillLevelChanged(level)}
                    key={index}
                    value={level}
                    size="small"
                    shape="circle"
                    type="text"
                    className="widget-skill-level-icon"
                    icon={
                      index <= skill.level ? (
                        <StarFilled style={{ color: "rgb(33, 150, 243)" }} />
                      ) : (
                        <StarOutlined style={{ color: "rgb(33, 150, 243)" }} />
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      }
    />
  );
};
