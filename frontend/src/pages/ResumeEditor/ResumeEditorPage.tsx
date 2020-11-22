import React, { useRef } from "react";
import { Editor, Viewer } from "../../components";
import "./ResumeEditorPage.css";

export function ResumeEditorPage() {
  const templateRef = useRef<HTMLDivElement>(null);

  return (
    <div className="resume-editor-page">
      <div className="resume-editor-page__sider">
        <Editor />
      </div>
      <div className="resume-editor-page__content">
        <Viewer templateRef={templateRef} />
      </div>
    </div>
  );
}
