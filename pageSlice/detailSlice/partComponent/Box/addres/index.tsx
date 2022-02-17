import React from 'react';

import Image from 'next/image';

import GroupImg from 'asset/detail/group.png';

function DetailAddresComponent() {
  return (
    <>
      <div className="border w-18 h-20 flex justify-between p-4 rounded-lg mb-4">
        <div>
          <p className="text-base font-extrabold">런던 베이글 뮤지엄</p>
          <p className="text-sm font-semibold text-gray-500">서울특별시 종로구 북촌로4길 20</p>
        </div>
        <Image src={GroupImg} alt="" width={12} height={12} />
      </div>
    </>
  )
}
export default DetailAddresComponent;
