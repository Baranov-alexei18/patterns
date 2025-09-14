import type { Theme } from './theme';

export class DarkTheme implements Theme {
  getBackground() {
    return '#333';
  }
  getTextColor() {
    return '#fff';
  }
}
