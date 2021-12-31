/**
* @title : TestPage
*/
import type { NextPage } from "next";

import { NumberArrAverage, NoOverlapNumberArr, SumOfTwoNum, MaskingPhoneNum } from '../components/utility/testFn';

const TestPage: NextPage = () => {
  console.log('NumberArrAverage', NumberArrAverage([1,5,6]));
  console.log('NoOverlapNumberArr', NoOverlapNumberArr([7,7,9,8,8,1]));
  console.log('SumOfTwoNum', SumOfTwoNum(1,5))
  console.log('MaskingPhoneNum', MaskingPhoneNum('010-4105-2711'))
  console.log('MaskingPhoneNum', MaskingPhoneNum('02-321-2212'))
  return (
    <>
    <h1>테스트 페이지</h1>
    </>
   );
};
export default TestPage;
