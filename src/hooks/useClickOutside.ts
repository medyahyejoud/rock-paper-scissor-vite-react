import { useEffect, RefObject } from "react";

type Handler = (event: Event) => void;

export function useOnClickOutside(
  ref: RefObject<HTMLDivElement | null>,
  handler: Handler
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
