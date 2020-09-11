import React, { ChangeEvent, useState } from "react";
import { useStore } from "../../utils/useStore";
import { Row, Col, Input, Typography } from "antd";
import { IProfile } from "../../types";
import { DispatchAction } from "../../store";
import "./Editor.css";

export const Editor = () => {
  const { store, dispatch } = useStore();
  const [profile, setProfile] = useState<IProfile>(store.profile);

  const onProfileChanged = (
    event: ChangeEvent<HTMLInputElement>,
    property: keyof IProfile
  ) => {
    const updatedProfile = { ...profile, [property]: event.target.value };
    setProfile(updatedProfile);

    dispatch({
      type: DispatchAction.updateProfileAction,
      payload: updatedProfile,
    });
  };

  const { Text, Title } = Typography;
  // TODO: create common shared components for widgets
  return (
    <div className="resume-editor">
      <Title
        className="resume-editor-title"
        level={5}
        style={{ fontWeight: 400 }}
      >
        Summary
      </Title>
      <Row gutter={24} className="resume-editor-row">
        <Col span={12}>
          <Text className="resume-editor-label" type="secondary">
            Job Title
          </Text>
          <Input
            className="resume-editor-input"
            value={profile.jobTitle}
            onChange={(event) => onProfileChanged(event, "jobTitle")}
          />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor-row">
        <Col span={12}>
          <Text className="resume-editor-label" type="secondary">
            First Name
          </Text>
          <Input
            className="resume-editor-input"
            value={profile.firstName}
            onChange={(event) => onProfileChanged(event, "firstName")}
          />
        </Col>
        <Col span={12}>
          <Text className="resume-editor-label" type="secondary">
            Last Name
          </Text>
          <Input
            className="resume-editor-input"
            value={profile.lastName}
            onChange={(event) => onProfileChanged(event, "lastName")}
          />
        </Col>
      </Row>
    </div>
  );
};
