import { useRef, useState, useEffect } from 'react';

export const useElementOnScreen = (options: any) => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState('delay');

  const callbackFunction = (entries: any) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.observe(containerRef.current);
    }
  },[containerRef, options]);

  return [containerRef, isVisible]
}