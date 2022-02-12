import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"

function useScroll(result: any) {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    if(page !== 0){
      //API 함수 호출
    }
  }, [page])

  return {
    ref
  }
}

export default useScroll;