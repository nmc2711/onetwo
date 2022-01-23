import { useRef, useEffect, useCallback } from 'react';

function viewScroll() {
  const _ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.5
  }
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // entry와 observer 출력
      console.log('entry:', entry);
      console.log('observer:', observer);
    })
  }, options)

  return {
    _ref
  }
}

export default viewScroll;