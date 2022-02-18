import { forwardRef, ReactNode, useEffect } from "react";

import useObserveScroll from './useObserverScroll';
import useDebounce from '../useDebounce';

interface TProps {
  callback?(): void;
  children: ReactNode;
  itemkey: number;
  leng: number;
  rootmargin?: string;
  threshold?: number;
}

const InfinityComponent = forwardRef<HTMLDivElement, TProps>(
  ({ children, ...props }, ref: any) => {
    const { callback, itemkey, leng, rootmargin, threshold } = props;
    const checkLastRef = leng === itemkey + 1 ? ref : null;
    const { entry } = useObserveScroll(checkLastRef, {
      threshold,
      rootMargin: rootmargin,
    });

    const isVisible = !!entry?.isIntersecting;
    const debouncedValue = useDebounce<boolean>(isVisible, 500);

    useEffect(() => {
      if (callback && isVisible) callback();
    }, [debouncedValue]);

    return (
      <div ref={ref}>{children}</div>
    )
  }
)
InfinityComponent.defaultProps = {
  rootmargin: "0%",
  threshold: 0,
};
export default InfinityComponent;
