export class EventEmitter {
  private listeners: ((data: string) => void)[] = [];

  subscribe(listener: (data: string) => void) {
    this.listeners.push(listener);
    return () => this.unsubscribe(listener);
  }

  unsubscribe(listener: (data: string) => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  notify(data: string) {
    this.listeners.forEach((listener) => listener(data));
  }
}
