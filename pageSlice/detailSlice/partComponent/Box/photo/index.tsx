import React from 'react';

import Image from 'next/image';
import Photo1Img from 'asset/detail/photo1.png';
import Photo2Img from 'asset/detail/photo2.png';
import Photo3Img from 'asset/detail/photo3.png';

function DetailPhotoComponent() {
  return (
    <>
      <div className="border flex mb-4">
        <Image src={Photo1Img} alt="" width={157} height={200} />
        <Image src={Photo2Img} alt="" width={122} height={115} />
        <Image src={Photo3Img} alt="" width={120} height={160} />
        <Image src={Photo1Img} alt="" width={155} height={147} />
      </div>
    </>
  )
}
export default DetailPhotoComponent
