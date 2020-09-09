import React from "react";
import { Editor } from "../components";
import { useStore } from "../utils/useStore";
import { getSelectedTemplate } from "../utils";
import "./editor.css";

export function ResumeEditorPage() {
  const { store } = useStore();
  const TemplatedViewer = getSelectedTemplate(store.selectedTemplate);

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
