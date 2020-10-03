import React, { ChangeEvent } from "react";
import { Input, Typography } from "antd";
import "./Input.css";

export const EditableInput = (props: {
  placeholder?: string;
  defaultValue?: string | undefined;
  bindProperty: string;
  onInputValueChanged: (value: string, property: string) => void;
}) => {
  const { Text } = Typography;
  const {
    placeholder,
    defaultValue,
    bindProperty,
    onInputValueChanged,
  } = props;
  return (
    <div className="widget-input">
      <Text className="widget-input-label" type="secondary">
        {placeholder}
      </Text>
      <Input
        className="widget-input-text"
        value={defaultValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onInputValueChanged(event.target.value, bindProperty)
        }
      />
      <div className="widget-input-bar"></div>
    </div>
  );
};
