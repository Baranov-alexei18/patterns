import React from 'react';

import styles from './styles.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className={`${styles.base} ${styles.primary}`} {...props}>
    {children}
  </button>
);

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className={`${styles.base} ${styles.secondary}`} {...props}>
    {children}
  </button>
);

type ButtonType = 'primary' | 'secondary';

export function ButtonFactory(type: ButtonType) {
  switch (type) {
    case 'primary':
      return PrimaryButton;
    case 'secondary':
      return SecondaryButton;
    default:
      throw new Error(`Unknown button type: ${type}`);
  }
}
