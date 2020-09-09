import { useState, useEffect } from "react";
import { store$, dispatch, StoreType, DispatchActionType } from "../store";

export function useStore(): {
  store: StoreType;
  dispatch: (action: DispatchActionType) => void;
} {
  const [store, setStore] = useState(store$.value);

  useEffect(() => {
    store$.subscribe((state) => {
      setStore(state);
    });

    return () => {
      // TODO: unsubscribe
    };
  });

  return { store, dispatch };
}
