import React, { FunctionComponent, useState } from "react";
import { Viewer } from "./components/Viewer";
import { TemplateType, TNewYork, TStockholm } from "./templates";
import { Switcher } from "./components/Switcher";

import "antd/dist/antd.css";
import "./App.css";

function App() {
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
    <div className="app">
      <div className="header"></div>
      <div className="sider">
        <Switcher onTemplateSwitched={(type) => setTemplateName(type)} />
      </div>
      <div className="content">
        <div className="page">
          <TemplatedViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
