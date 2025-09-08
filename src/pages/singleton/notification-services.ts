type Notification = {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
};

type Listener = (notifications: Notification[]) => void;

class NotificationService {
  private static instance: NotificationService;
  private listeners: Listener[] = [];
  private notifications: Notification[] = [];
  private idCounter = 0;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.notifications));
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    listener(this.notifications);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private addNotification(type: Notification['type'], message: string) {
    const newNotification: Notification = {
      id: this.idCounter++,
      type,
      message,
    };
    this.notifications = [...this.notifications, newNotification];
    this.notifyListeners();

    setTimeout(() => {
      this.removeNotification(newNotification.id);
    }, 3000);
  }

  success(message: string) {
    this.addNotification('success', message);
  }

  error(message: string) {
    this.addNotification('error', message);
  }

  info(message: string) {
    this.addNotification('info', message);
  }

  warning(message: string) {
    this.addNotification('warning', message);
  }

  removeNotification(id: number) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.notifyListeners();
  }
}

export const notificationService = NotificationService.getInstance();
export type { Notification };
