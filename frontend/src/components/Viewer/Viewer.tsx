import React, { RefObject } from "react";
import { useSelectedTemplate } from "../../utils/useSelectedTemplate";
import { useStore } from "../../utils/useStore";

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const SelectedTemplate = useSelectedTemplate();
  const { store } = useStore();

  return (
    <div className="viewer">
      <SelectedTemplate domRef={props.templateRef} profile={store.profile} />
    </div>
  );
};
