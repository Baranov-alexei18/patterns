import type { Theme } from './theme';

export class LightTheme implements Theme {
  getBackground() {
    return '#fff';
  }
  getTextColor() {
    return '#000';
  }
}
