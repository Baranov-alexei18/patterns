import React from 'react';

import { createButtonBuilder } from './button-config';

type ButtonProps = {
  label: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const UIButton: React.FC<ButtonProps> = ({ label, color, size, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: size === 'small' ? '4px 8px' : size === 'medium' ? '8px 16px' : '12px 20px',
        borderRadius: '8px',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
