/**
 * @title : 원투 공통 인풋타입
 */
import React from 'react';

export interface Props {
  value?: string;
  initialValue?: string;
  placeholer?: string;
  htmlTypes?: string;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
  labelRight?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconClickable?: boolean;
  className?: string;
  clearable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClearClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onIconClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const defaultProps = {
  disabled: false,
  readOnly: false,
  clearable: false,
  iconClickable: false,
  htmlTypes: 'text',
  className: '',
  placeholder: '',
  initialValue: '',
}

export type NativeAttrs = Omit<React.InputHTMLAttributes<any>, keyof Props>
