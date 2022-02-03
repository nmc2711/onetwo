/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState, useEffect } from 'react';

function viewScroll() {
  const [target, setTarget] = useState(null);
  const [itemLists, setItemLists] = useState([1]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  async function getMoreItem() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
  };

  async function onIntersect([entry], observer) {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: any;
    console.log(1);
    if (target) {
      console.log(2);
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return {
    target,
    itemLists,
    setTarget
  }
}

export default viewScroll;