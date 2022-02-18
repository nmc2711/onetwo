import type { NextPage } from "next";

import Detail from '../../pageSlice/detailSlice';

const detail: NextPage = ({ id }: any) => {
  return (
    <Detail />
  )
}

export default detail;