import React from "react";
import { Editor, Viewer } from "../../components";
import { SlackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./ResumeEditorPage.css";

export function ResumeEditorPage() {
  return (
    <>
      <div className="resume-editor-page-sider">
        <Editor />
      </div>
      <div className="resume-editor-page-content">
        <div className="resume-editor-page-sheet">
          <Viewer />
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
