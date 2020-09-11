import React from "react";
import { useSelectedTemplate } from "../../utils/useSelectedTemplate";
import { useStore } from "../../utils/useStore";

export const Viewer = () => {
  const SelectedTemplate = useSelectedTemplate();
  const { store } = useStore();

  return (
    <div className="viewer">
      <SelectedTemplate profile={store.profile} />
    </div>
  );
};
