export const NumberArrAverage = (arr: number[]) => {
  // 숫자배열의 입력 평균을 구하는 함수
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  result = sum / arr.length;

  return result;
}
// NumberArrAverage([1,5,6]) .. return 4

export const NoOverlapNumberArr = (arr: number[]) => {
  // 숫자배열의 중복 숫자를 제거하여 중복없는 배열을 반환하는 함수
  let result: number[] = [];

  arr.forEach(x => {
    if (result[result.length -1] !== x) {
      // result 배열의 이전값과 비교하는 것이 핵심
      result.push(x);
    }
  });

  return result;
}
// NoOverlapNumberArr([7,7,9,8,8,1]) .. return [7,9,8,1]

export const SumOfTwoNum = (num1: number, num2: number) => {
  let result = 0;
  // 두 정수의 사이의 합
  const maxNum = Math.max(num1, num2),
        minNum = Math.min(num1, num2);
  for (let i = minNum + 1; i < maxNum; i++) {
    result = result + i;
  }

  return result;
}
// SumOfTwoNum(1,5) .. return 9

export const MaskingPhoneNum = (phoneStr: string, isDash?: boolean) => {
  let result = '';

  let splitPhoneNum = phoneStr.split('-');

  const purePhoneStr = phoneStr.replace(/-/gi, '');

  result = purePhoneStr.slice(0, splitPhoneNum[0].length) + "*".repeat(purePhoneStr.length - (splitPhoneNum[0].length + splitPhoneNum[2].length)) + purePhoneStr.slice(-splitPhoneNum[2].length);

  return result;

};