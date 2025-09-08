import type { ReactNode } from 'react';

export interface UIFactory {
  createButton(label: string, onClick: () => void): ReactNode;
  createInput(placeholder: string): ReactNode;
}
