'use client';

import { Heading, Stack } from '@chakra-ui/react';
import { Fragment } from 'react';

import { PatternInfo } from '../../components/pattern-info';

//
// --- СТАРЫЙ КОМПОНЕНТ ---
// (например, библиотека, которую нельзя менять)
//
type OldButtonProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const OldUIButton = ({ title, color, onPress }: OldButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        color: 'white',
      }}
      onClick={onPress}
    >
      {title}
    </button>
  );
};

//
// --- АДАПТЕР ---
// переводит "новый" интерфейс в "старый"
//
type NewButtonProps = {
  label: string;
  colorScheme: string;
  onClick: () => void;
};

const ButtonAdapter = ({ label, colorScheme, onClick }: NewButtonProps) => {
  return <OldUIButton title={label} color={colorScheme} onPress={onClick} />;
};

const AdapterPage = () => {
  return (
    <Fragment>
      <PatternInfo
        title="Adapter (Адаптер)"
        description="Паттерн Adapter позволяет использовать несовместимые интерфейсы вместе. Он выступает как «переходник», который переводит методы одного объекта в методы, понятные другому."
        advantages={[
          'Позволяет использовать сторонний или устаревший код без изменения',
          'Упрощает интеграцию разных библиотек',
          'Делает код более гибким и расширяемым',
          'Помогает избегать дублирования логики',
        ]}
        disadvantages={[
          'Добавляет дополнительный уровень абстракции',
          'Может усложнить структуру проекта',
          'Слишком много адаптеров → сложно поддерживать',
        ]}
        usage={[
          'Работа с устаревшими API (старый код → новый интерфейс)',
          'Интеграция сторонних библиотек',
          'Совместимость разных форматов данных (JSON ↔ XML)',
          'Сетевые протоколы (например, TCP ↔ WebSocket)',
          'UI-компоненты (обертка вокруг разных библиотек кнопок, таблиц)',
          'Адаптация разных версий API',
          'Пример из жизни: адаптер для розетки (евро ↔ америка)',
        ]}
      />

      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Пример: адаптер для UI-кнопки
        </Heading>

        <Stack gap={4} p={6}>
          <ButtonAdapter
            label="Кнопка через Adapter"
            colorScheme="teal"
            onClick={() => alert('Работает через Adapter!')}
          />
        </Stack>
      </div>
    </Fragment>
  );
};

export default AdapterPage;
