import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// SSR controls cannot act until their client handlers are attached.
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
