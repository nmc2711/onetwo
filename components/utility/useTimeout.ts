/**
 * @title : 타임아웃체크 콜백함수 실행.
 * @purpose : 시간경과를 약속하고 콜백함수 실행 목적
 */

import { useEffect, useLayoutEffect, useRef } from 'react';

function useTimeout(callback: () => void, delay: number | null) {
  const saveCallback = useRef(callback);
  //
  useLayoutEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  //
  useEffect(() => {
    
    // delay가 0이면 의미없음 리턴처리
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => saveCallback.current(), delay);

    return () => clearTimeout(id);

  },[delay]);
}

export default useTimeout;


/**
 * example docs
 */

// import { useState } from 'react';

// function ExampleComponents() {
//   const [visible, setVisible] = useState(true);

//   const hide = () => setVisible(false);

//   useTimeout(hide, 5000);

//   return (
//     <div>
//       {visible && '광고가 처음에는 보이고 5초뒤에는 사라질 것이다.'}
//     </div>
//   );
// }

// export default ExampleComponents;
