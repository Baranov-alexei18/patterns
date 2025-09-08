import type { FC } from 'react';

export interface InputProps {
  placeholder: string;
}

export const InputBase: FC<InputProps & { className: string }> = ({ placeholder, className }) => {
  return <input type="text" placeholder={placeholder} className={className} />;
};
