import { TEMPLATE, TNewYork, TStockholm } from "../templates";
import { FunctionComponent } from "react";
import { Viewer } from "../components";

export const getSelectedTemplate = (option: TEMPLATE): FunctionComponent => {
  switch (option) {
    case TEMPLATE.NewYork:
      return Viewer(TNewYork);
    case TEMPLATE.Stockholm:
      return Viewer(TStockholm);
    default:
      return Viewer(TStockholm);
  }
};
