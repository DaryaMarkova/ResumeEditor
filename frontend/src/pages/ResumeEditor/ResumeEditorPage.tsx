import React from "react";
import { Editor, Viewer } from "../../components";
import { SlackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import fileDownload from 'js-file-download';
import "./ResumeEditorPage.css";


export function ResumeEditorPage() {
	const onDownloadPdfButtonClicked = () => {
		axios.post('http://localhost:3005/pdf', {
			"content": "<div style=\"text-align:center; border:1px dotted orange\"><h2>Love love love</h2></div>"
		}, {
			responseType: 'blob'
		}) 
		/*axios
			.get('http://localhost:3005/pdf', {
				responseType: 'blob'
			}) */
			.then(response => fileDownload(response.data, 'resume.pdf'))
			.catch(err => console.log(err));
	};

  return (
    <div className="resume-editor-page">
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
					<Button type="primary" onClick={onDownloadPdfButtonClicked} style={{marginLeft: "12px"}}>Download pdf</Button>
        </div>
      </div>
    </div>
  );
}