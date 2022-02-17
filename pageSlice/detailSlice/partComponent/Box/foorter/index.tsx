import React from 'react';

import Image from 'next/image';

import FooterKeepImg from 'asset/detail/footerkeep.png';
import FooterShareImg from 'asset/detail/footershare.png';

function DetailFoorterComponent() {
  return (
    <>
      <div className="flex text-sm font-semibold text-gray-500 font-normal">
        <div className="flex items-center">
          <Image src={FooterKeepImg} alt="" width={24} height={24} />
          <p>keep</p>
        </div>
        <div className="flex ml-2 items-center">
          <Image src={FooterShareImg} alt="" width={24} height={24} />
          <p>Share</p>
        </div>
      </div>
    </>
  )
}
export default DetailFoorterComponent
