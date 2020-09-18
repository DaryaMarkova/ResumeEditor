import React, { useState } from "react";
import { useStore } from "../../utils/useStore";
import { Row, Col, Typography, Divider } from "antd";
import { IProfile } from "../../types";
import { DispatchAction } from "../../store";
import { Input, ImagePicker } from "../../shared";
import "./Editor.css";

export const Editor = () => {
  const { store, dispatch } = useStore();
  const [profile, setProfile] = useState<IProfile>(store.profile);

  const onProfileChanged = (
    value: string,
    property: keyof IProfile | string
  ) => {
    const updatedProfile = { ...profile, [property]: value };
    setProfile(updatedProfile);

    dispatch({
      type: DispatchAction.updateProfileAction,
      payload: updatedProfile,
    });
  };

  const onImageChoosen = () => {
    dispatch({
      type: DispatchAction.setAvatarShownAction,
      payload: true,
    });
  };

  const onImageReseted = () => {
    dispatch({
      type: DispatchAction.setAvatarShownAction,
      payload: false,
    });
  };

  const { Text, Title } = Typography;

  return (
    <div className="resume-editor">
      <Title
        className="resume-editor-title"
        level={4}
        style={{ fontWeight: 400 }}
      >
        Summary
      </Title>
      <Divider />
      <Text strong>Personal Details</Text>
      <Row gutter={24} className="resume-editor-row">
        <Col span={12}>
          <Input
            placeholder="Job Title"
            defaultValue={profile.jobTitle}
            bindProperty={"jobTitle"}
            onInputValueChanged={onProfileChanged}
          />
        </Col>
        <Col span={12}>
          <ImagePicker
            onImageChoosen={onImageChoosen}
            onImageReseted={onImageReseted}
          />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor-row">
        <Col span={12}>
          <Input
            placeholder="First Name"
            defaultValue={profile.firstName}
            bindProperty={"firstName"}
            onInputValueChanged={onProfileChanged}
          />
        </Col>
        <Col span={12}>
          <Input
            placeholder="Last Name"
            defaultValue={profile.lastName}
            bindProperty={"lastName"}
            onInputValueChanged={onProfileChanged}
          />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor-row">
        <Col span={12}>
          <Input
            placeholder="Email"
            defaultValue={profile.email}
            bindProperty={"email"}
            onInputValueChanged={onProfileChanged}
          />
        </Col>
        <Col span={12}>
          <Input
            placeholder="Phone"
            defaultValue={profile.phone}
            bindProperty={"phone"}
            onInputValueChanged={onProfileChanged}
          />
        </Col>
      </Row>
    </div>
  );
};
