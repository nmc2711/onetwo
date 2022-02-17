import { forwardRef, ReactNode, useEffect } from "react";

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
    return (
      <div ref={ref}>{children}</div>
    )
  }
)