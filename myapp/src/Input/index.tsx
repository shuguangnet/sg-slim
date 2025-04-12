import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

// 扩展 Ant Design Input 的属性接口
export interface InputProps extends AntInputProps {
  // 自定义属性可以在这里添加
  customBorder?: boolean;
  rounded?: boolean;
}

// Input 组件
const Input: React.FC<InputProps> = ({
  customBorder,
  rounded,
  className,
  style,
  ...restProps
}) => {
  // 处理自定义样式
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
      className={className}
      style={customStyle}
      {...restProps}
    />
  );
};

// 添加Input组件的子组件
Input.TextArea = AntInput.TextArea;
Input.Search = AntInput.Search;
Input.Password = AntInput.Password;

export default Input;
