'use client';

import { useEffect, useState } from 'react';

import { notificationService, type Notification } from './notificationServices';
import styles from './styles.module.css';

export const NotificationContainer = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe(setNotifications);

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.container}>
      {notifications.map((n) => (
        <div key={n.id} className={`${styles.notification} ${styles[n.type]}`}>
          {n.message}
        </div>
      ))}
    </div>
  );
};
