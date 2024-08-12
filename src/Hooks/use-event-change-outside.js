import { useEffect, useRef } from "react";

export const useEventChangeOutside = (handler, eventType) => {
  let domNode = useRef();

  useEffect(() => {
    let eventHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener(eventType, eventHandler);

    return () => {
      document.removeEventListener(eventType, eventHandler);
    };
  });

  return domNode;
};
