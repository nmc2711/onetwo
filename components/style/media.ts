import { css } from "styled-components";

type TSize = {
  [key: string]: number
}

const DeviceSize: TSize = {
  smMobile: 480,
  mdMobile: 768,
  lgMobile: 1024,
  xlMobile:1280
};

export default Object.keys(DeviceSize).reduce((acc: any, label) => {
  acc[label] = (...args: Parameters<typeof css>) => css`
    @media (max-width: ${DeviceSize[label]}px) {
      ${css(...args)};
    }
  `
  return acc;
}, {});