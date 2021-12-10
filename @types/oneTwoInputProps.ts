/**
 * @title : 원투 공통 인풋 타입정리
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
}