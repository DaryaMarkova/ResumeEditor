import React, { FunctionComponent } from "react";
import { IProfile } from "../types";
import { useStore } from "../utils/useStore";

export function Viewer(
  Template: FunctionComponent<{ profile: IProfile }>,
  style?: { [key: string]: string }
) {
  const { store } = useStore();

  return function () {
    return (
      <div>
        <Template profile={store.profile} />
      </div>
    );
  };
}
