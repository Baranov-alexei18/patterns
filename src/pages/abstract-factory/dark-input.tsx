import type { FC } from 'react';

import styles from './dark.module.css';
import { InputBase, type InputProps } from './input';

export const DarkInput: FC<InputProps> = ({ placeholder }) => {
  return <InputBase placeholder={placeholder} className={styles.input} />;
};
