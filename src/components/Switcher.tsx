import React, { useState } from "react";
import { TemplateType } from "../templates";

export const Switcher = (props: {
  onTemplateSwitched: (type: TemplateType) => void;
}) => {
  return (
    <div className="app-switcher">
      {Object.keys(TemplateType)
        .filter((key) => +key >= 0)
        .map((key: string, index: number) => (
          <button onClick={() => props.onTemplateSwitched(index)} key={index}>
            {TemplateType[index]}
          </button>
        ))}
    </div>
  );
};
