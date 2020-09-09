import { BehaviorSubject } from "rxjs";
import { TemplateType } from "./templates";

export type StoreType = { selectedTemplate: TemplateType };

const initialState: StoreType = {
  selectedTemplate: TemplateType.Stockholm,
};

export const store$ = new BehaviorSubject(initialState);

export enum DispatchAction {
  switchTemplateAction = "SWITCH_TEMPLATE",
}

export type DispatchActionType = {
  type: DispatchAction;
  payload: TemplateType | {};
};

export const dispatch = (action: DispatchActionType) => {
  switch (action.type) {
    case DispatchAction.switchTemplateAction:
      store$.next({
        ...initialState,
        selectedTemplate: action.payload as TemplateType,
      });
  }
};
