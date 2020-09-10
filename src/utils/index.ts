import { ETemplate, TemplateNewYork, TemplateStockholm } from "../templates";
import { FunctionComponent } from "react";
import { Viewer } from "../components";

// useActiveTemplate  change to & do not overlap Viewer with state useSelectedProfile??
export const getSelectedTemplate = (option: ETemplate): FunctionComponent => {
  switch (option) {
    case ETemplate.NewYork:
      return Viewer(TemplateNewYork);
    case ETemplate.Stockholm:
      return Viewer(TemplateStockholm);
    default:
      return Viewer(TemplateStockholm);
  }
};
