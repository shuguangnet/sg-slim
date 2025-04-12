import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import styled from 'styled-components';

export type ButtonType = 'primary' | 'secondary' | 'text' | 'link';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonProps extends Omit<AntButtonProps, 'type' | 'size'> {
  type?: ButtonType;
  size?: ButtonSize;
}

const StyledButton = styled(AntButton)<ButtonProps>`
  &.ant-btn {
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s ease;

    &-primary {
      background: linear-gradient(145deg, #2563eb, #1d4ed8);
      border: none;
      box-shadow: 0 4px 6px -1px rgb(37 99 235 / 0.2);

      &:hover {
        background: linear-gradient(145deg, #1d4ed8, #1e40af);
        transform: translateY(-1px);
      }
    }

    &-secondary {
      background: #f1f5f9;
      border: none;
      color: #334155;

      &:hover {
        background: #e2e8f0;
        color: #334155;
      }
    }

    &-text {
      &:hover {
        background: #f1f5f9;
        color: #334155;
      }
    }

    &-link {
      &:hover {
        color: #1d4ed8;
      }
    }

    &-lg {
      font-size: 16px;
      height: 44px;
      padding: 8px 24px;
    }

    &-middle {
      font-size: 14px;
      height: 36px;
      padding: 6px 16px;
    }

    &-sm {
      font-size: 12px;
      height: 28px;
      padding: 4px 12px;
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'middle',
  children,
  ...rest
}) => {
  const buttonType = type === 'secondary' ? 'default' : type;
  
  return (
    <StyledButton
      type={buttonType}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';