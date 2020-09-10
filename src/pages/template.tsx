import React from "react";
import { Switcher } from "../components/";
import { useStore } from "../utils/useStore";
import { getSelectedTemplate } from "../utils";
import { DispatchAction } from "../store";
import { ETemplate } from "../templates";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons/";
import "./template.css";

export function TemplateSwitcherPage() {
  const { store, dispatch } = useStore();

  const TemplatedViewer = getSelectedTemplate(store.selectedTemplate);

  const dispatchSelectedTemplate = (type: ETemplate) =>
    dispatch({
      type: DispatchAction.switchTemplateAction,
      payload: type,
    });

  return (
    <>
      <div className="template-switcher-page-header">
        <Link className="template-switcher-page-link-to-editor" to="/editor">
          <LeftOutlined />
          <span>Back to editor</span>
        </Link>
      </div>
      <div className="template-switcher-page-sider">
        <Switcher
          onTemplateSwitched={(type) => dispatchSelectedTemplate(type)}
        />
      </div>
      <div className="template-switcher-page-content">
        <div className="template-switcher-page-sheet">
          <TemplatedViewer />
        </div>
      </div>
    </>
  );
}
