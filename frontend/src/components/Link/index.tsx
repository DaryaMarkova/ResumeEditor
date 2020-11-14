import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Collapse } from "../../shared";
import { SocialLink as Link } from "../../types";
import { EditableInput } from "../../shared/Input/Input";
import "./index.css";

export const SocialLink = (props: {
  link: Link & { isActive?: boolean };
  onLinkChanged: (link: Link & { isActive?: boolean }) => void;
}) => {
  const onLinkPropertyChanged = (
    value: string | boolean,
    property: keyof Link
  ) => {
    props.onLinkChanged({ ...props.link, [property]: value });
  };

  return (
    <Collapse
      defaultExpanded={props.link.isActive}
      onDefaultExpandedChanged={(status) =>
        props.onLinkChanged({ ...props.link, isActive: status })
      }
      header={
        <div className="widget-sociallink__header">
          <span className="widget-sociallink__header-notspecified">
            {props.link.label || "(Not specified)"}
          </span>
          <span className="widget-sociallink__header-href">
            {props.link.href || "https://..."}
          </span>
        </div>
      }
      content={
        <Row gutter={24} className="full-width">
          <Col span={12}>
            <EditableInput
              onInputValueChanged={onLinkPropertyChanged}
              placeholder="Label"
              defaultValue={props.link.label}
              bindProperty="label"
            />
          </Col>
          <Col span={12}>
            <EditableInput
              onInputValueChanged={onLinkPropertyChanged}
              placeholder="Link"
              defaultValue={props.link.href}
              bindProperty="href"
            />
          </Col>
        </Row>
      }
    />
  );
};
