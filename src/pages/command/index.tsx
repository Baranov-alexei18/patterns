'use client';

import { Fragment, useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

type Command<T> = {
  execute: (state: T) => T;
  undo: (state: T) => T;
};

type EditorState = string;

const createWriteCommand = (char: string): Command<EditorState> => ({
  execute: (state) => state + char,
  undo: (state) => state.slice(0, -1),
});

function useCommandManager<T>(initialState: T) {
  const [state, setState] = useState(initialState);
  const [history, setHistory] = useState<Command<T>[]>([]);

  const executeCommand = (command: Command<T>) => {
    setState((prev) => {
      const newState = command.execute(prev);
      setHistory((h) => [...h, command]);
      return newState;
    });
  };

  const undo = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const last = h[h.length - 1];
      setState((prev) => last.undo(prev));
      return h.slice(0, -1);
    });
  };

  return { state, executeCommand, undo };
}

// === React UI ===
export default function CommandFunctionalPage() {
  const { state, executeCommand, undo } = useCommandManager<EditorState>('');

  const handleWrite = (char: string) => {
    executeCommand(createWriteCommand(char));
  };

  return (
    <Fragment>
      <PatternInfo
        title="Command (Команда)"
        description="Команда — это объект с execute/undo функциями. Она изменяет состояние и умеет его отменять. Паттерн используется в Redux actions, возвращая payload и type в reducer"
        advantages={[
          'Функции вместо классов',
          'Просто хранить историю состояний',
          'Можно сериализовать команды (JSON)',
        ]}
        disadvantages={[
          'Историю хранить нужно вручную',
          'Команды становятся просто объектами с функциями (менее строгая структура)',
        ]}
        usage={['Undo/Redo', 'История API-запросов', 'UI-действия в редакторах', 'Redux actions']}
      />

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Функциональный редактор</h2>
        <p className="mb-4 border p-2 min-h-[40px]">
          {state || <span className="text-gray-400">Пусто</span>}
        </p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleWrite('A')}
          >
            Написать A
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => handleWrite('B')}
          >
            Написать B
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={undo}>
            Отменить
          </button>
        </div>
      </div>
    </Fragment>
  );
}
