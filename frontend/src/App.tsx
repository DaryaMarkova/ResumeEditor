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
      </Switch>
    </div>
  );
}

export default App;
