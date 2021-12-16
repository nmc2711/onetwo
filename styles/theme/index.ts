import { css } from 'styled-components';

const color = {
  mainColor: 'orange',
  subColor: 'green',
  white: '#ffffff',
  purple: '#3f3cbb',
  midnight: '#121063',
  metal: '#565584',
}

const spacing = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
}

const font = {
  body2: {
    regular: css`
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
    `,
    medium: css`
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
    `,
    bold: css`
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
    `
  },
  body3: {
    regular: css`
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
    `,
    medium: css`
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
    `,
    bold: css`
      font-size: 14px;
      line-height: 24px;
      font-weight: 700;
    `
  },
}

export const theme = {
  colors: color,
  spacings: spacing,
  fonts :font
};
