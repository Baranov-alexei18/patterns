'use client';

import { useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

export default function StatePage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    setState('loading');

    await new Promise((promise) => setTimeout(promise, 1500));

    setState('success');
  };

  return (
    <div className="p-8">
      <PatternInfo
        title="State (Состояние)"
        description="Паттерн State позволяет объекту менять поведение в зависимости от его состояния. Вместо использования множества условий if/else или switch, каждое состояние выделяется в отдельную логику, а объект-контекст делегирует выполнение текущему состоянию."
        advantages={[
          'Избавляет от множества условных операторов',
          'Легко добавлять новые состояния',
          'Поведение становится более структурированным',
          'Состояния изолированы друг от друга',
        ]}
        disadvantages={[
          'Может быть избыточным для простых случаев',
          'Увеличивает количество классов или модулей',
          'Иногда проще использовать простое состояние (useState)',
        ]}
        usage={[
          'UI-компоненты (кнопки: idle, loading, success)',
          'Формы (чистая, заполненная, невалидная, отправленная)',
          'Игры (состояния персонажей: атака, защита, отдых)',
          'Работа с API (загрузка, ошибка, успех)',
          'Анимации с разными состояниями переходов',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример работы с состояниями кнопки</h2>

        {state === 'idle' && (
          <button onClick={handleClick} className="rounded bg-blue-600 px-4 py-2 text-white">
            Отправить
          </button>
        )}

        {state === 'loading' && (
          <button disabled className="rounded bg-gray-400 px-4 py-2 text-white">
            Загружается...
          </button>
        )}

        {state === 'success' && <p className="text-green-600 font-bold">✅ Успешно отправлено!</p>}
      </div>
    </div>
  );
}
