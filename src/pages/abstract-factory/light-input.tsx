import type { FC } from 'react';

import { InputBase, type InputProps } from './input';
import styles from './light.module.css';

export const LightInput: FC<InputProps> = ({ placeholder }) => {
  return <InputBase placeholder={placeholder} className={styles.input} />;
};
