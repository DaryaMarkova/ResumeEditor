import { NewYorkTemplate } from "./Newyork/NewYorkTemplate";
import { StockholmTemplate } from "./Stockholm/StockholmTemplate";
import { IProfile } from "../types";

export { NewYorkTemplate, StockholmTemplate };

export enum ETemplate {
  Stockholm,
  NewYork,
  Vienna,
  Sydney,
  London,
  Dublin,
}

export type TemplateProps = {
  profile: IProfile;
};
