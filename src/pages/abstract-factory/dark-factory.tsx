import { DarkButton } from './dark-button';
import { DarkInput } from './dark-input';
import type { UIFactory } from './ui-factory';

export class DarkFactory implements UIFactory {
  createButton(label: string, onClick: () => void) {
    return <DarkButton label={label} onClick={onClick} />;
  }

  createInput(placeholder: string) {
    return <DarkInput placeholder={placeholder} />;
  }
}
