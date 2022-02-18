import React from 'react';

import Image from 'next/image';

import GroupSvg from "asset/svgs/group.svg";
import WarningSvg from "asset/svgs/warning.svg";

import { Flex, Text } from "@chakra-ui/react";

type TProps = {
  addressName: string,
  address: string,
  cb: ()=> void
}

function DetailAddressComponent({ item, cb }: TProps) {
  return (
    <>
      <Flex justify="space-between" padding="24px 20px" marginBottom="32px" borderRadius="12px" border="1px solid rgba(34, 34, 34, 0.08);">
        <div>
          <Text fontSize="m" fontWeight="bold">{item.addressName}</Text>
          <Text fontSize="xs" fontWeight="bold" color="rgba(34, 34, 34, 0.25)">{item.address}</Text>
        </div>

        {item.address ?
          <Image src={GroupSvg} alt="" width={16} height={16} onClick={cb} />
          :
          <Image src={WarningSvg} alt="" width={16} height={16} />
        }
      </Flex>
    </>
  )
}
export default DetailAddressComponent;
