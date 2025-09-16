'use client';

import { useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

const Circle = ({ x, y, color }: { x: number; y: number; color: string }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: color,
      }}
    />
  );
};

export default function FlyweightPage() {
  const [circles, setCircles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  const addCircle = () => {
    const id = circles.length + 1;
    const newCircle = {
      id,
      x: Math.random() * 1000,
      y: Math.random() * 300,
      color: ['red', 'green', 'blue', 'orange'][Math.floor(Math.random() * 4)],
    };
    setCircles([...circles, newCircle]);
  };

  return (
    <div className="p-8 relative h-[400px] border border-gray-300">
      <PatternInfo
        title="Flyweight (Легковес / Приспособленец)"
        description="Паттерн Flyweight используется, когда нужно эффективно работать с большим количеством однотипных объектов. Он разделяет общее (внутреннее) состояние между объектами, а уникальное хранит снаружи."
        advantages={[
          'Значительно экономит память',
          'Повышает производительность при работе с множеством объектов',
          'Хорошо подходит для графики, текста и UI-элементов',
        ]}
        disadvantages={[
          'Усложняет код за счёт разделения состояния',
          'Не всегда оправдан при небольшом числе объектов',
          'Сложно поддерживать при частом изменении общего состояния',
        ]}
        usage={[
          'Текстовые редакторы (каждый символ – объект, но общий шрифт хранится один раз)',
          'Игры (тысячи деревьев, врагов, пуль, но общая модель/текстура одна)',
          'UI-компоненты (например, кнопки/иконки, где общий стиль одинаковый)',
          'Виртуализация больших списков (react-window, react-virtualized)',
          'Системы логирования и аналитики (общая структура события + уникальные данные)',
        ]}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример с кругами</h2>

        <button onClick={addCircle} className="rounded bg-blue-600 px-4 py-2 text-white">
          Добавить круг
        </button>

        <div className="relative w-full h-full">
          {circles.map((c) => (
            <Circle key={c.id} x={c.x} y={c.y} color={c.color} />
          ))}
        </div>
      </div>
    </div>
  );
}
