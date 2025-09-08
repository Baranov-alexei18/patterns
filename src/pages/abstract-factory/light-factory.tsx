import { LightButton } from './light-button';
import { LightInput } from './light-input';
import type { UIFactory } from './ui-factory';

export class LightFactory implements UIFactory {
  createButton(label: string, onClick: () => void) {
    return <LightButton label={label} onClick={onClick} />;
  }

  createInput(placeholder: string) {
    return <LightInput placeholder={placeholder} />;
  }
}
