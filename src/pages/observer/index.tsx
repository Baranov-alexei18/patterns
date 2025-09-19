'use client';

import { useEffect, useState } from 'react';

import { EventEmitter } from './event-emitter';
import { PatternInfo } from '../../components/pattern-info';

const emitter = new EventEmitter();

export default function ObserverPage() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = emitter.subscribe((msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return unsubscribe;
  }, []);

  const sendMessage = () => {
    emitter.notify('Новое сообщение: ' + new Date().toLocaleTimeString());
  };

  return (
    <div className="p-8">
      <PatternInfo
        title="Observer (Наблюдатель)"
        description="Observer определяет зависимость один-ко-многим: когда объект (Subject) меняет состояние, все подписчики (Observers) автоматически уведомляются."
        advantages={[
          'Снижает связанность между объектами',
          'Легко добавлять новые подписки',
          'Отлично подходит для событийных систем',
        ]}
        disadvantages={[
          'Сложность отладки цепочек вызовов',
          'Возможна перегрузка при большом числе подписчиков',
        ]}
        usage={[
          'События в UI (клики, ввод, события браузера)',
          'Подписка на стор в Redux/Zustand/Recoil',
          'Push-уведомления и чат-системы',
          'Игры и симуляции (состояние игрока, враги)',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример с сообщениями</h2>

        <button
          onClick={sendMessage}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Отправить сообщение
        </button>

        <ul className="mt-6 space-y-2">
          {messages.map((msg, i) => (
            <li key={i} className="border-b pb-2">
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
