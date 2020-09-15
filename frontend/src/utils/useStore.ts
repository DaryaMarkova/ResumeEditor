import { useState, useEffect, useRef } from "react";
import { store$, dispatch, TStore, TDispatchAction } from "../store";
import { Subscription } from "rxjs";

export function useStore(): {
  store: TStore;
  dispatch: (action: TDispatchAction) => void;
} {
  const [store, setStore] = useState(store$.value);
  const subscription = useRef<Subscription>();

  useEffect(() => {
    subscription.current = store$.subscribe((state) => {
      setStore(state);
    });

    return () => {
      if (subscription.current) {
        subscription.current.unsubscribe();
      }
    };
  });

  return { store, dispatch };
}
