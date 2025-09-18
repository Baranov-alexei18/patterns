/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

const adminService = {
  openPanel() {
    return '🔐 Панель администратора открыта!';
  },
};

const createSecureProxy = (service: typeof adminService, role: string) => {
  return new Proxy(service, {
    get(target, prop: keyof typeof service) {
      if (prop === 'openPanel') {
        return () => {
          if (role !== 'admin') {
            throw new Error('⛔ Доступ запрещён! Только для администраторов.');
          }
          return target[prop]();
        };
      }
      return target[prop];
    },
  });
};

export default function ProxyAccessPage() {
  const [role, setRole] = useState<'guest' | 'admin'>('guest');
  const [message, setMessage] = useState<string | null>(null);

  const secureAdmin = createSecureProxy(adminService, role);

  const handleTryOpen = () => {
    try {
      const result = secureAdmin.openPanel();
      setMessage(result);
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className="p-8">
      <PatternInfo
        title="Proxy (Контроль доступа)"
        description="Proxy может использоваться для ограничения доступа к объекту. Например, доступ к административным функциям приложения можно разрешить только определённым пользователям."
        advantages={[
          'Безопасность — ограничение доступа к важным объектам',
          'Чёткое разделение ролей и прав',
          'Возможность централизованного контроля',
        ]}
        disadvantages={['Усложняет архитектуру', 'Требует продуманного управления ролями']}
        usage={[
          'Реализация ролевой модели доступа',
          'Фильтрация запросов на сервер',
          'Контроль использования API в больших приложениях',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример: Proxy для проверки прав</h2>

        <p className="mb-4">
          Текущая роль: <strong>{role}</strong>
        </p>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRole('guest')}
            className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Войти как гость
          </button>
          <button
            onClick={() => setRole('admin')}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Войти как админ
          </button>
        </div>

        <button
          onClick={handleTryOpen}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Попробовать открыть панель
        </button>

        {message && <p className="mt-6 text-lg font-semibold">{message}</p>}
      </div>
    </div>
  );
}
