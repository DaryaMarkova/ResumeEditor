import React, { useState, useEffect } from "react";
import { Switch as Switcher, Typography } from "antd";
import { Skill, SkillLevelType } from "../../types";
import { EditableSkill } from "../Skill/Skill";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import { Chip } from "../../shared";
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

  const setSkillActive = (index: number) => {
    setSkills([
      ...skills.map((it, _index) =>
        index == _index ? { ...it, isActive: true } : { ...it, isActive: false }
      ),
    ]);
  };

  const onSkillPropertyChanged = (index: number, updatedSkill: Skill) => {
    setSkills(
      skills.map((skill, _index) => (_index == index ? updatedSkill : skill))
    );
  };

  const getRenderedSkill = (skill: Skill & { isActive?: boolean }) => {
    const index = skills.indexOf(skill);

    return (
      <EditableSkill
        onSkillChanged={(_skill) => onSkillPropertyChanged(index, _skill)}
        skill={skill}
      />
    );
  };

  const { Text, Paragraph } = Typography;

  return (
    <div className="widget-skill__list">
      <Paragraph>
        <Switcher size={"small"} />
        <Text style={{ fontSize: "small" }}>
          &nbsp;&nbsp;Don't show experience level
        </Text>
      </Paragraph>

      <div className="widget-skill__chips">
        {skills.map((skill, index) =>
          skill.skillName ? (
            <Chip
              key={skill.id}
              label={skill.skillName}
              onClick={() => setSkillActive(index)}
            />
          ) : null
        )}
      </div>

      <DraggableList
        items={skills}
        onItemsChanged={(items) => setSkills(items as Skill[])}
        getItemInstance={() => {
          return {
            id: skills.length,
            level: SkillLevelType.Novice,
            skillName: "",
            isActive: true,
          };
        }}
        getRenderedItem={(item) => getRenderedSkill(item as Skill)}
        getItemStyle={(isDragging: boolean, draggableStyle: any) => {
          return {
            ...draggableStyle,
          };
        }}
      />
    </div>
  );
};
