import React, { ChangeEvent, useState } from "react";
import { useStore } from "../utils/useStore";
import { Row, Col, Input, Typography } from "antd";
import { IProfile } from "../types";
import { DispatchAction } from "../store";

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
      type: DispatchAction.switchTemplateAction,
      payload: updatedProfile,
    });
  };

  const { Text } = Typography;

  return (
    <div className="resume-editor">
      <Row>
        <Col span={6}>
          <Text style={{ fontSize: "10px" }} type="secondary">
            Job Title
          </Text>
          <Input
            property="jobTitle"
            value={profile.jobTitle}
            onChange={(event) => onProfileChanged(event, "jobTitle")}
          />
        </Col>
      </Row>
    </div>
  );
};
