import React, { useRef } from "react";
import { Editor, Viewer } from "../../components";
import { SlackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";
import "./ResumeEditorPage.css";

export function ResumeEditorPage() {
  const templateRef = useRef<HTMLDivElement>(null);

  const onDownloadPdfButtonClicked = () => {
    axios
      .post(
        "http://localhost:3005/pdf",
        {
          content: templateRef.current?.innerHTML,
        },
        {
          responseType: "blob",
        }
      )
      .then((response) => fileDownload(response.data, "resume.pdf"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="resume-editor-page">
      <div className="resume-editor-page__sider">
        <Editor />
      </div>
      <div className="resume-editor-page__content">
        <div className="resume-editor-page__sheet">
          <Viewer templateRef={templateRef} />
        </div>
        <div className="resume-editor-page__tools">
          <Link
            className="resume-editor-page-link-to-templates"
            to="/templates"
          >
            <SlackOutlined />
            <span>Select template</span>
          </Link>
          <Button type="primary" onClick={onDownloadPdfButtonClicked}>
            Download pdf
          </Button>
        </div>
      </div>
    </div>
  );
}
