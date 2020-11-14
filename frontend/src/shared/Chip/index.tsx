import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

export const Chip = (props: { label?: string; onClick: () => void }) => {
  return (
    <div className="widget-chip" onClick={() => props.onClick()}>
      {props.label}&nbsp;
      <CloseOutlined style={{ fontSize: "10px", fontWeight: 800 }} />
    </div>
  );
};
