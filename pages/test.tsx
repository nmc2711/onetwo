/**
*@title : TestPage
*/
import type { NextPage } from "next";

import { NumberArrAverage, NoOverlapNumberArr } from '../components/utility/testFn';

const TestPage: NextPage = () => {
  console.log(NumberArrAverage([1,5,6]));
  console.log(NoOverlapNumberArr([7,7,9,8,8,1]));
  return (
    <>
    <h1>테스트 페이지</h1>
    </>
   );
};
export default TestPage;
