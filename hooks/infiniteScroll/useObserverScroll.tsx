import { RefObject, useState, useEffect } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

interface Props {
  entry: IntersectionObserverEntry | undefined;
}

function useObserveScroll(
  elementRef: RefObject<HTMLElement | null>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args,
  page? : number
  ): Props {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
      setEntry(entry);
    }

    useEffect(() => {
      if (!elementRef) return;
      const node = elementRef?.current;
      const hasIOsupport = window?.IntersectionObserver ?? false;
      if (!hasIOsupport || frozen || !node) return;

      const observerParams = { threshold, root, rootMargin };

      const observer = new IntersectionObserver(updateEntry, observerParams);

      return () => observer.disconnect();

    }, [elementRef, page, threshold, root, rootMargin, frozen]);

    return { entry };
}

export default useObserveScroll;