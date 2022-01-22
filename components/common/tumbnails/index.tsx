import React from 'react';

import Arch from './arch';
import Cross from './cross';

import { Box } from "@chakra-ui/react";


interface Props {
  img: string;
}

function CommonThumnail({ img } : Props) {
  return (
    //케이스에 따라, 셰입별로 보내주기 
    <>
      {/* <Arch img={img} /> */}
      <Cross img={img}/>
    </>
  )
}

export default CommonThumnail;
