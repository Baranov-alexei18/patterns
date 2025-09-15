'use client';

import { useEffect, useState } from 'react';

import { ApiFacade } from './services';
import { PatternInfo } from '../../components/pattern-info';

const api = new ApiFacade();

export default function FacadePage() {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);

  useEffect(() => {
    api.getUser(1).then(setUser).catch(console.error);
  }, []);

  const handleCreate = async () => {
    const newUser = await api.createUser('Alex');
    setUser(newUser);
  };

  const handleDelete = async () => {
    if (user) {
      await api.deleteUser(user.id);
      setUser(null);
    }
  };

  return (
    <div className="p-8">
      <PatternInfo
        title="Facade (Фасад)"
        description="Паттерн Facade (Фасад) предоставляет унифицированный интерфейс к набору интерфейсов системы. Он упрощает взаимодействие клиента с подсистемой, скрывая её сложность."
        advantages={[
          'Скрывает детали реализации от клиента',
          'Упрощает использование сложной подсистемы',
          'Централизует управление зависимостями',
          'Повышает читаемость и поддержку кода',
        ]}
        disadvantages={[
          'Может стать «божественным объектом» при избыточной логике',
          'Иногда скрывает слишком много деталей, усложняя расширение',
        ]}
        usage={[
          'Работа с API и запросами к серверу',
          'Обёртки для сторонних библиотек',
          'Упрощение взаимодействия со сложной бизнес-логикой',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример работы API-фасада</h2>

        {user ? (
          <p className="mb-4">👤 Пользователь: {user.name}</p>
        ) : (
          <p className="mb-4 text-gray-500">Нет загруженного пользователя</p>
        )}

        <div className="flex gap-4">
          <button onClick={handleCreate} className="rounded bg-green-600 px-4 py-2 text-white">
            Создать пользователя
          </button>
          <button onClick={handleDelete} className="rounded bg-red-600 px-4 py-2 text-white">
            Удалить пользователя
          </button>
        </div>
      </div>
    </div>
  );
}
