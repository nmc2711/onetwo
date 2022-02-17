import { forwardRef, ReactNode, useEffect } from "react";

import useObserveScroll from './useObserverScroll';

interface TProps {
  callback?(): void;
  children: ReactNode;
  itemkey: number;
  leng: number;
  rootmargin?: string;
  threshold?: number; 
}

const InfinityCompoent = forwardRef<HTMLDivElement, TProps>(
  ({ children, ...props }, ref: any) => {
    const { callback, itemkey, leng, rootmargin, threshold } = props;
    const checkLastRef = leng === itemkey + 1 ? ref : null;
    const { entry } = useObserveScroll(checkLastRef, {
      threshold,
      rootMargin: rootmargin,
    })
    return (
      <div ref={ref}>{children}</div>
    )
  }
)