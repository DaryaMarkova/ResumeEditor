import React, { FunctionComponent, useState } from "react";

import { Viewer } from "./components/Viewer";
import { TemplateType, TNewYork, TStockholm } from "./templates";
import { Switcher } from "./components/Switcher";
import { Row, Col } from "antd";
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
    TemplateType.NewYork
  );

  const TemplatedViewer = getTemplate(templateName);

  return (
    <div className="app">
      <Row>
        <Col span={4}>
          <Switcher onTemplateSwitched={(type) => setTemplateName(type)} />
        </Col>
        <Col span={20}>
          <TemplatedViewer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
