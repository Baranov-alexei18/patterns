import type { FC } from 'react';

import { ButtonBase, type ButtonProps } from './button';
import styles from './light.module.css';

export const LightButton: FC<ButtonProps> = ({ label, onClick }) => {
  return <ButtonBase label={label} onClick={onClick} className={styles.button} />;
};
