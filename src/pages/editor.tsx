import React from "react";
import { Editor } from "../components";
import "./editor.css";

export function ResumeEditorPage() {
  return (
    <>
      <div className="resume-editor-page-sider">
        <Editor />
      </div>
      <div className="resume-editor-page-content"></div>
    </>
  );
}
