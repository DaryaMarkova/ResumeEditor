import { useState, useEffect, useRef, FunctionComponent } from "react";
import { store$ } from "../store";
import { Subscription } from "rxjs";
import {
  ETemplate,
  NewYorkTemplate,
  TemplateProps,
  StockholmTemplate,
} from "../templates";

const getSelectedTemplate = (
  eTemplate: ETemplate
): FunctionComponent<TemplateProps> => {
  switch (eTemplate) {
    case ETemplate.NewYork:
      return NewYorkTemplate;
    case ETemplate.Stockholm:
      return StockholmTemplate;
    default:
      return StockholmTemplate;
  }
};

export function useSelectedTemplate(): FunctionComponent<TemplateProps> {
  const [selectedTemplate, setSelectedTemplate] = useState<ETemplate>(
    store$.value.selectedTemplate
  );

  const subscription = useRef<Subscription>();

  useEffect(() => {
    subscription.current = store$.subscribe((state) => {
      setSelectedTemplate(state.selectedTemplate);
    });

    return () => {
      if (subscription.current) {
        subscription.current.unsubscribe();
      }
    };
  });

  return getSelectedTemplate(selectedTemplate);
}
