import React from "react";
import { Editor } from "../components";
import { useStore } from "../utils/useStore";
import { getSelectedTemplate } from "../utils";
import { SlackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
        <div className="resume-editor-page-tools">
          <Link
            className="resume-editor-page-link-to-templates"
            to="/templates"
          >
            <SlackOutlined />
            <span>Select template</span>
          </Link>
        </div>
      </div>
    </>
  );
}
