'use client';

import { useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

class Range {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

export default function IteratorPage() {
  const [iterator] = useState(() => new Range(1, 5)[Symbol.iterator]());
  const [current, setCurrent] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handleNext = () => {
    const { value, done } = iterator.next();
    setCurrent(value ?? null);
    setDone(done);
  };

  return (
    <div className="p-8">
      <PatternInfo
        title="Iterator (Итератор)"
        description="Паттерн Iterator (Итератор) предоставляет унифицированный интерфейс для последовательного обхода элементов коллекции без раскрытия её внутренней структуры."
        advantages={[
          'Единый способ обхода разных структур данных',
          'Можно менять алгоритм обхода без изменения коллекции',
          'Поддерживает ленивый обход (по шагам)',
        ]}
        disadvantages={[
          'Избыточен для простых массивов и списков',
          'Добавляет кодовую сложность при простых структурах',
        ]}
        usage={[
          'Обход массивов, деревьев и графов',
          'Бесконечная прокрутка данных',
          'Ленивые вычисления (генераторы)',
          'Реализация undo/redo как итератора состояний',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример: Range-итератор</h2>
        <p className="mb-4">
          {done
            ? '✅ Итерация завершена'
            : current !== null
              ? `➡️ Текущее значение: ${current}`
              : 'ℹ️ Нажмите «Следующий элемент»'}
        </p>
        <button
          onClick={handleNext}
          disabled={done}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Следующий элемент
        </button>
      </div>
    </div>
  );
}
