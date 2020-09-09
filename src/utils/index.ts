import { TemplateType, TNewYork, TStockholm } from "../templates";
import { FunctionComponent } from "react";
import { Viewer } from "../components";

export const getSelectedTemplate = (
  option: TemplateType
): FunctionComponent => {
  switch (option) {
    case TemplateType.NewYork:
      return Viewer(TNewYork);
    case TemplateType.Stockholm:
      return Viewer(TStockholm);
    default:
      return Viewer(TStockholm);
  }
};
