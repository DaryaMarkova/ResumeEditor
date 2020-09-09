import React, { FunctionComponent, useState } from "react";
import { TemplateType, TNewYork, TStockholm } from "../templates";
import { Switcher, Viewer } from "../components/";
import "./template.css";

export function TemplateSwitcherPage() {
  const getTemplate = (option: TemplateType): FunctionComponent => {
    switch (option) {
      case TemplateType.NewYork:
        return Viewer(TNewYork);
      case TemplateType.Stockholm:
        return Viewer(TStockholm);
      default:
        return Viewer(TStockholm);
    }
  };

  const [templateName, setTemplateName] = useState<TemplateType>(
    TemplateType.Stockholm
  );

  const TemplatedViewer = getTemplate(templateName);

  return (
    <>
      <div className="template-switcher-page-header"></div>
      <div className="template-switcher-page-sider">
        <Switcher onTemplateSwitched={(type) => setTemplateName(type)} />
      </div>
      <div className="template-switcher-page-content">
        <div className="template-switcher-page-sheet">
          <TemplatedViewer />
        </div>
      </div>
    </>
  );
}
