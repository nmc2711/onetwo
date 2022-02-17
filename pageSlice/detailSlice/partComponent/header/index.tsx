import React from 'react';

import Image from 'next/image';

import ArrowbackImg from 'asset/detail/arrowback.png';
import KeepgrayImg from 'asset/detail/keepgray.png';
import ShareImg from 'asset/detail/share.png';

function DetailHeaderComponent() {
  return (
    <>
      <div className="flex justify-between p-4">
        <Image src={ArrowbackImg} width={24} height={24} alt="" />
        <div>
          <Image src={KeepgrayImg} width={24} height={24} alt="" />
          <Image src={ShareImg} width={24} height={24} alt="" />
        </div>
      </div>
    </>
  )
}
export default DetailHeaderComponent
