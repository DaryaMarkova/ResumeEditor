import { BehaviorSubject } from "rxjs";
import { ETemplate } from "./templates";
import { IProfile } from "./types";

export enum DispatchAction {
  switchTemplateAction = "SWITCH_TEMPLATE",
  updateProfileAction = "UPDATE_PROFILE",
}

export type TStore = {
  selectedTemplate: ETemplate;
  profile: IProfile;
};

export type TDispatchAction = {
  type: DispatchAction;
  payload: ETemplate | IProfile;
};

const initialState: TStore = {
  selectedTemplate: ETemplate.Stockholm,
  profile: {
    jobTitle: "",
    firstName: "",
    lastName: "",
  },
};

export const store$ = new BehaviorSubject(initialState);

export const dispatch = (action: TDispatchAction) => {
  switch (action.type) {
    case DispatchAction.switchTemplateAction:
      store$.next({
        ...store$.value,
        selectedTemplate: action.payload as ETemplate,
      });
      return;
    case DispatchAction.updateProfileAction:
      store$.next({
        ...store$.value,
        profile: action.payload as IProfile,
      });
      return;
  }
};
