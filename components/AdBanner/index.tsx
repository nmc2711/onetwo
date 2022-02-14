import React from 'react';

import HeaderReviewComponent from './headerReviewBanner';
import ScrolleReviewComponent from './scrollReviewBanner';

import { useElementOnScreen } from 'hooks/useElementOnScreen';

import { Fade } from "@chakra-ui/react";

function ReviewBanner() {
  
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '100px',
    threshold: 1.0,
  })

  return (
    <>
      <div ref={containerRef}>
        <HeaderReviewComponent/>
      </div>
      
      {!isVisible && <Fade in={!isVisible}><ScrolleReviewComponent /></Fade>}
    </>
  )
}
export default ReviewBanner
