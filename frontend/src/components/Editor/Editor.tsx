import React, { useState } from "react";
import { useStore } from "../../utils/useStore";
import { Row, Col, Typography, Divider } from "antd";
import { IProfile, SocialLink as Link } from "../../types";
import { DispatchAction } from "../../store";
import { Input, ImagePicker, TextArea } from "../../shared";
import { SkillList, EmploymentHistoryList } from "../../components";
import { SocialLink } from "../SocialLink";
import "./Editor.css";
import { SocialLinkList } from "../SocialLinkList";

export const Editor = () => {
  const { store, dispatch } = useStore();
  const [profile, setProfile] = useState<IProfile>(store.profile);
  // temporarily
  const [link, setLink] = useState<Link>({
    id: 0,
    label: "",
    href: "",
    isActive: true,
  });

  const onProfileChanged = (
    value: string | boolean | any[],
    property?: keyof IProfile | string
  ) => {
    if (!property) {
      return;
    }

    const updatedProfile = { ...profile, [property]: value };
    setProfile(updatedProfile);

    dispatch({
      type: DispatchAction.updateProfileAction,
      payload: updatedProfile,
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
      <Row gutter={24} className="resume-editor__row">
        <Col span={24}>
          <Text className="resume-editor__subtitle" strong>
            Personal details
          </Text>
        </Col>
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
            onImageChoosen={() => onProfileChanged(true, "hasAvatar")}
            onImageReseted={() => onProfileChanged(false, "hasAvatar")}
          />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor__row">
        <Col span={24}>
          <Text className="resume-editor__subtitle" strong>
            Professional summary
          </Text>
        </Col>
        <Col span={24}>
          <TextArea
            placeholder="Include 2-3 clear sentences about your overall experience"
            defaultValue={profile.summary}
            bindProperty={"summary"}
            onTextareaValueChanged={onProfileChanged}
          />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor__row">
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
      <Row gutter={24} className="resume-editor__row">
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
      <Row gutter={24} className="resume-editor__row">
        <Col span={24}>
          <Text strong className="resume-editor__subtitle">
            Employment History
          </Text>
        </Col>
        <Col span={24}>
          <EmploymentHistoryList onEmploymentListChanged={onProfileChanged} />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor__row">
        <Col span={24}>
          <Text strong className="resume-editor__subtitle">
            Skills
          </Text>
        </Col>
        <Col span={24}>
          <SkillList onSkillListChanged={onProfileChanged} />
        </Col>
      </Row>
      <Row gutter={24} className="resume-editor__row">
        <Col span={24}>
          <Text strong className="resume-editor__subtitle">
            Websites & Social Links
          </Text>
        </Col>
        <Col span={24}>
          {/* <SocialLink link={link} onLinkChanged={(link) => setLink(link)} /> */}
          <SocialLinkList />
        </Col>
      </Row>
    </div>
  );
};
