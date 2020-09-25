import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Skill, SkillLevelType } from "../../types";
import { EditableSkill } from "../../shared/Skill/Skill";
import "./SkillList.css";

export const SkillList = (props: {
  onSkillListChanged: (skills: Skill[], property: string) => void;
}) => {
  const [skills, setSkills] = useState<Array<Skill & { isActive?: boolean }>>(
    []
  );
  const { onSkillListChanged } = props;

  useEffect(() => {
    onSkillListChanged(skills, "skills");
  }, [skills]);

  const addSkill = () => {
    setSkills([
      ...skills.map((it) => {
        return { ...it, isActive: false };
      }),
      {
        level: SkillLevelType.Novice,
        skillName: "",
        id: skills.length,
        isActive: true,
      },
    ]);
  };

  const onSkillPropertyChanged = (index: number, updatedSkill: Skill) => {
    setSkills(
      skills.map((skill, _index) => (_index == index ? updatedSkill : skill))
    );
  };

  const onSkillDeleted = (index: number) => {
    setSkills(skills.slice(0, index).concat(skills.slice(index + 1)));
    // setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="widget-skill-list">
      <Button
        onClick={addSkill}
        type="link"
        className="widget-skill-list-add-button"
      >
        <PlusOutlined />
        Add skill
      </Button>
      {skills.map((skill, index) => (
        <Row key={skill.id} className="full-width" align="middle">
          <Col span={23}>
            <EditableSkill
              onSkillChanged={(_skill) => onSkillPropertyChanged(index, _skill)}
              skill={skill}
              key={skill.id}
            />
          </Col>
          <Col span={1}>
            <Button
              type="text"
              shape="circle"
              icon={<DeleteOutlined />}
              size="small"
              onClick={() => onSkillDeleted(index)}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};
