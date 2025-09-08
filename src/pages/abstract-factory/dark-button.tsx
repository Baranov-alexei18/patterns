import type { FC } from 'react';

import { ButtonBase, type ButtonProps } from './button';
import styles from './dark.module.css';

export const DarkButton: FC<ButtonProps> = ({ label, onClick }) => {
  return <ButtonBase label={label} onClick={onClick} className={styles.button} />;
};
