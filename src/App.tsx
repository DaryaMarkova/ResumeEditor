import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { TemplateSwitcherPage } from "./pages/template";
import { ResumeEditorPage } from "./pages/editor";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/editor">
          <ResumeEditorPage />
        </Route>
        <Route path={["/templates", "/"]}>
          <TemplateSwitcherPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
