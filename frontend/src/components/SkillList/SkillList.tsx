import React, { useState, useEffect } from "react";
import { Button, Row, Col, Switch as Switcher, Typography } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Skill, SkillLevelType } from "../../types";
import { EditableSkill } from "../Skill/Skill";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import "./SkillList.css";
import { Chip } from "../../shared";

export const SkillList = (props: {
  onSkillListChanged: (skills: Skill[], property: string) => void;
}) => {
  const [skills, setSkills] = useState<Array<Skill & { isActive?: boolean }>>(
    []
  );
  const { onSkillListChanged } = props;

  useEffect(() => {
    console.log("SKILLS", skills);
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

  const setSkillActive = (index: number) => {
    // TODO: last skill is not set to active
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

  const onSkillDeleted = (index: number) => {
    setSkills(skills.slice(0, index).concat(skills.slice(index + 1)));
  };

  const getRenderedSkill = (skill: Skill & { isActive?: boolean }) => {
    const index = skills.indexOf(skill);

    return (
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
        onItemsReordered={(items) => setSkills(items as Skill[])}
        getRenderedItem={(item) => getRenderedSkill(item as Skill)}
        getItemStyle={(isDragging: boolean, draggableStyle: any) => {
          return {
            ...draggableStyle,
          };
        }}
      />

      <Button
        type="link"
        onClick={addSkill}
        className="widget-skill__list-addbutton"
      >
        <PlusOutlined />
        Add skill
      </Button>
    </div>
  );
};
