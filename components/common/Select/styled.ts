import { SelectHTMLAttributes } from 'react';
import { css } from 'styled-components';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldWidth: string;
}

export const Select = css<Props>`
  flex: none;
  width: ${({ fieldWidth }) => fieldWidth};
  height: 44px;
  padding: 0 40px 0 16px;
  color: ${({ theme, value }) => !!value ? theme.color.gray[900] : theme.color.gray[600]};
  ${({ theme }) => theme.font2.body3.regular};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 2px;
  /* background-image */
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.color.white};
  background-size: 24px 24px;
  appearance: none;
  transition: all 150ms ease-out;

  &::-ms-expand {
    display: none;
  }

  &::-ms-value {
    background: none;
    color: ${({ theme }) => theme.color.gray[900]};
  }
  
  &:disabled {
    border-color: ${({ theme }) => theme.color.gray[300]};
    background-color: ${({ theme }) => theme.color.gray[50]};
  }
`

