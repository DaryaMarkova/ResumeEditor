import React from "react";
import { TemplateSwitcherPage } from "./pages/TemplateSwitcher/TemplateSwitcher";
import { ResumeEditorPage } from "./pages/ResumeEditor/ResumeEditorPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path={"/editor"}>
          <ResumeEditorPage />
        </Route>
        <Route path={"/templates"}>
          <TemplateSwitcherPage />
        </Route>
        <Route path={"/pdf"}>
          <p>Displaying pdf page</p>
          <iframe
            src="http://localhost:3005/resume.pdf"
            style={{ width: "480px", height: "640px" }}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
