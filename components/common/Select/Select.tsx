import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';
import { Select } from './styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldWidth?: string;
  children: ReactNode;
}

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(({
  fieldWidth = '100%',
  style,
  children,
  ...props
}, ref) => {
  return (
    // <Select
    //   {...props}
    //   ref={ref}
    //   style={style}
    //   fieldWidth={fieldWidth}
    // >
    //   {children}
    // </Select>
  );
});

export default SelectComponent;
