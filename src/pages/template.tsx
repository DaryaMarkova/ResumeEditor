import React from "react";
import { Switcher } from "../components/";
import { useStore } from "../utils/useStore";
import { getSelectedTemplate } from "../utils";
import { DispatchAction } from "../store";
import { TemplateType } from "../templates";
import { Link } from "react-router-dom";
import "./template.css";

export function TemplateSwitcherPage() {
  const { store, dispatch } = useStore();
  const TemplatedViewer = getSelectedTemplate(store.selectedTemplate);

  const dispatchSelectedTemplate = (type: TemplateType) =>
    dispatch({ type: DispatchAction.switchTemplateAction, payload: type });

  return (
    <>
      <div className="template-switcher-page-header">
        <Link to={"/editor"} style={{ lineHeight: "40px", marginLeft: "20px" }}>
          Back to editor
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
