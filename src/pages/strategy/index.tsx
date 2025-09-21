'use client';

import { useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

const stategies = {
  alphabetical: (arr: string[]) => arr.sort(),
  reverse: (arr: string[]) => arr.sort().reverse(),
  length: (arr: string[]) => arr.sort((a, b) => a.length - b.length),
};

export default function StrategyPage() {
  const [strategy, setStrategy] = useState<'alphabetical' | 'reverse' | 'length'>('alphabetical');
  const items = ['React', 'Vue', 'Angular', 'Svelte'];

  const sortedItems = stategies[strategy](items);
  return (
    <div className="p-8">
      <PatternInfo
        title="Strategy (Стратегия)"
        description="Strategy (Стратегия) позволяет выбирать алгоритм выполнения во время работы программы. Это избавляет от множества if/else и упрощает замену поведения."
        advantages={[
          'Избавляет от громоздких условных конструкций',
          'Легко подменять алгоритмы',
          'Упрощает тестирование (каждая стратегия тестируется отдельно)',
        ]}
        disadvantages={[
          'Увеличивает количество файлов/классов',
          'Иногда избыточен для простых задач',
        ]}
        usage={[
          'Валидация форм',
          'Сортировка/фильтрация данных',
          'Алгоритмы авторизации',
          'Подключение разных API-клиентов',
          'Выбор способов рендеринга UI',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример со стратегией сортировки</h2>

        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value as 'alphabetical' | 'reverse' | 'length')}
          className="border px-2 py-1 mb-4"
        >
          <option value="alphabetical">По алфавиту</option>
          <option value="reverse">Обратный порядок</option>
          <option value="length">По длине строки</option>
        </select>

        <ul className="list-disc ml-6">
          {sortedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
