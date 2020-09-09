import React from "react";
import { Editor, Viewer } from "../components";
import { TNewYork } from "../templates";
import "./editor.css";

export function ResumeEditorPage() {
  const TemplatedViewer = Viewer(TNewYork);

  return (
    <>
      <div className="resume-editor-page-sider">
        <Editor />
      </div>
      <div className="resume-editor-page-content">
        <div className="resume-editor-page-sheet">
          <TemplatedViewer />
        </div>
      </div>
    </>
  );
}
