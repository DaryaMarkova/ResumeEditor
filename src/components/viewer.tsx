import React, { FunctionComponent } from "react";

export function Viewer(Template: FunctionComponent) {
  return function () {
    return <Template />;
  };
}
