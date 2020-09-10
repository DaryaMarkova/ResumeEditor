import { useState, useEffect } from "react";
import { store$, dispatch, TStore, TDispatchAction } from "../store";

export function useStore(): {
  store: TStore;
  dispatch: (action: TDispatchAction) => void;
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
