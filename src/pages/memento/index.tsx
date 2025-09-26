'use client';

import { Fragment, useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

function createEditor() {
  let content = '';

  return {
    type: (text: string) => {
      content += text;
    },
    getContent: () => content,
    save: () => ({ content }), // Memento (снимок)
    restore: (memento: { content: string }) => {
      content = memento.content;
    },
  };
}

function createHistory() {
  const stack: { content: string }[] = [];
  return {
    push: (memento: { content: string }) => stack.push(memento),
    pop: () => stack.pop(),
  };
}

export default function MementoPage() {
  const [editor] = useState(() => createEditor());
  const [history] = useState(() => createHistory());
  const [, setVersion] = useState(0);

  const forceUpdate = () => setVersion((v) => v + 1);

  const handleType = (char: string) => {
    editor.type(char);
    forceUpdate();
  };

  const handleSave = () => {
    history.push(editor.save());
  };

  const handleUndo = () => {
    const snapshot = history.pop();
    if (snapshot) {
      editor.restore(snapshot);
      forceUpdate();
    }
  };

  return (
    <Fragment>
      <PatternInfo
        title="Memento (Хранитель)"
        description="Паттерн Memento позволяет сохранять и восстанавливать состояние объекта, не раскрывая его внутренней структуры."
        advantages={[
          'Инкапсуляция — состояние скрыто',
          'Поддержка undo/redo',
          'Можно хранить несколько снимков',
        ]}
        disadvantages={['Может занимать много памяти', 'Нужно управлять историей вручную']}
        usage={['Undo/Redo в редакторах', 'Сохранение прогресса в играх', 'Откат транзакций']}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Пример: текстовый редактор</h2>
        <p className="mb-4 border p-2 min-h-[40px]">
          {editor.getContent() || <span className="text-gray-400">Пусто...</span>}
        </p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleType('A')}
          >
            Написать A
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleType('B')}
          >
            Написать B
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleSave}>
            Сохранить
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={handleUndo}>
            Откатить
          </button>
        </div>
      </div>
    </Fragment>
  );
}
