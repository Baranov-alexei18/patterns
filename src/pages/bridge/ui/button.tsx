import React from 'react';

import type { Theme } from './theme';

type ButtonProps = {
  label: string;
  theme: Theme; // мост к реализации
};

export const Button: React.FC<ButtonProps> = ({ label, theme }) => {
  return (
    <button
      style={{
        backgroundColor: theme.getBackground(),
        color: theme.getTextColor(),
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
      }}
    >
      {label}
    </button>
  );
};
