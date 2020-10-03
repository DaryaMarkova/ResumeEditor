import React, { ChangeEvent } from "react";
import { Input, Typography } from "antd";
import "./Textarea.css";

export const EditableTextarea = (props: {
  placeholder?: string;
  defaultValue?: string;
  bindProperty?: string;
  onTextareaValueChanged?: (value: string, property?: string) => void;
}) => {
  const { Text } = Typography;
  const { TextArea } = Input;
  const {
    placeholder,
    defaultValue,
    bindProperty,
    onTextareaValueChanged,
  } = props;

  return (
    <div className="widget-textarea">
      <Text className="widget-textarea-label" type="secondary">
        {placeholder}
      </Text>
      <TextArea
        rows={5}
        className="widget-textarea-text"
        value={defaultValue}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          if (onTextareaValueChanged)
            onTextareaValueChanged(event.target.value, bindProperty);
        }}
      />
      <div className="widget-textarea-bar"></div>
    </div>
  );
};
