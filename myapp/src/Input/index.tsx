import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
  customBorder?: boolean;
  rounded?: boolean;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  TextArea: typeof AntInput.TextArea;
  Search: typeof AntInput.Search;
  Password: typeof AntInput.Password;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  customBorder,
  rounded,
  className,
  style,
  ...restProps
}, ref) => {
  const customStyle = {
    ...style,
    ...(customBorder && {
      borderColor: '#1890ff',
      boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
    }),
    ...(rounded && {
      borderRadius: '20px',
    }),
  };

  return (
    <AntInput
      ref={ref}
      className={className}
      style={customStyle}
      {...restProps}
    />
  );
}) as CompoundedComponent;

Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;
Input.Password = AntInput.Password;

Input.displayName = 'Input';

export default Input;