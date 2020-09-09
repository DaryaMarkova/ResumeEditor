import React, { FunctionComponent } from "react";

export function Viewer(
  Template: FunctionComponent,
  style?: { [key: string]: string }
) {
  return function () {
    return (
      <div>
        <Template />
      </div>
    );
  };
}
