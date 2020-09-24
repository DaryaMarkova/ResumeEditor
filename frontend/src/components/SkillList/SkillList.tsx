import React, { useState } from "react";
import { Collapse, Button, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Skill, SkillLevelType } from "../../types";
import { EditableSkill } from "../../shared/Skill/Skill";
import "./SkillList.css";

export const SkillList = () => {
  const [skills, setSkills] = useState<Array<Skill & { isActive?: boolean }>>(
    []
  );

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        level: SkillLevelType.Novice,
        skillName: "",
        id: skills.length,
      },
    ]);
  };

  const onSkillPropertyChanged = (index: number, updatedSkill: Skill) => {
    setSkills(
      skills.map((skill, _index) => (_index == index ? updatedSkill : skill))
    );
  };

  const { Panel } = Collapse;
  const { Text } = Typography;

  return (
    <>
      <Row className="full-width">
        <Button
          onClick={addSkill}
          type="link"
          className="widget-skill-list-add-btn"
        >
          <PlusOutlined />
          Add skill
        </Button>
      </Row>
      <Row className="full-width">
        <Collapse className="full-width" bordered>
          {skills.map((skill, index) => (
            <Panel
              forceRender={true}
              key={index + 1}
              className="widget-skill-panel"
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
            >
              <EditableSkill
                key={skill.id}
                skill={skill}
                onSkillChanged={(skill) => onSkillPropertyChanged(index, skill)}
              />
            </Panel>
          ))}
        </Collapse>
      </Row>
    </>
  );
};
