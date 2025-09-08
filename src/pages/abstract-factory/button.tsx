import type { FC } from 'react';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const ButtonBase: FC<ButtonProps & { className: string }> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
