import { TEMPLATE } from "../templates";
import { DispatchAction } from "../store";

export type DispatchActionType = {
  type: DispatchAction;
  payload: TEMPLATE | {};
};

export type StoreType = { selectedTemplate: TEMPLATE };
