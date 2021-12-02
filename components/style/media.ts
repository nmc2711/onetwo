import { css } from "styled-components";

type TSize = {
  [key: string]: number
}

const DeviceSize: TSize = {
  mobile: 480,
};

export default Object.keys(DeviceSize).reduce((acc: any, label) => {
  acc[label] = (...args: Parameters<typeof css>) => css`
    @media (max-width: ${DeviceSize[label]}px) {
      ${css(...args)};
    }
  `
  return acc;
}, {});