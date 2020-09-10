import { BehaviorSubject } from "rxjs";
import { TEMPLATE } from "./templates";
import { DispatchActionType, StoreType } from "./types";

const initialState: StoreType = {
  selectedTemplate: TEMPLATE.Stockholm,
};

export const store$ = new BehaviorSubject(initialState);

export enum DispatchAction {
  switchTemplateAction = "SWITCH_TEMPLATE",
}

export const dispatch = (action: DispatchActionType) => {
  switch (action.type) {
    case DispatchAction.switchTemplateAction:
      store$.next({
        ...initialState,
        selectedTemplate: action.payload as TEMPLATE,
      });
  }
};
