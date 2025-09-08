'use client';

import { Heading, Stack } from '@chakra-ui/react';
import { Fragment } from 'react/jsx-runtime';

import { ButtonFactory } from './ui/button-factory';
import { PatternInfo } from '../../components/pattern-info';

const FactoryPage = () => {
  const PrimaryButton = ButtonFactory('primary');
  const SecondaryButton = ButtonFactory('secondary');

  return (
    <Fragment>
      <PatternInfo
        title="Factory (Фабрика)"
        description="Паттерн Factory (Фабрика) используется для создания объектов без необходимости указывать точный класс создаваемого объекта. Он инкапсулирует процесс создания и позволяет легко подменять реализации. фабрика нужна всегда, когда есть несколько вариантов реализации, код клиента должен быть независим от выбора, важно легко подменять/расширять реализацию."
        advantages={[
          'Инкапсуляция логики создания объектов',
          'Упрощает тестирование за счёт возможности подмены реализаций',
          'Снижает связанность клиентского кода',
          'Удобно использовать для разных окружений (prod/dev/mock)',
        ]}
        disadvantages={[
          'Добавляет дополнительный слой абстракции',
          'Может усложнить проект при слишком простых задачах',
          'Избыточен, если не предполагается множественных реализаций',
        ]}
        usage={[
          'Создание API-клиентов (fetch/axios/mock).',
          'Фабрика UI-компонентов для разных тем или брендов.',
          'Динамическое создание форм и таблиц по JSON-схеме.',
          'Подмена реализаций сервисов в тестах.',
        ]}
      />

      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Пример с UI-кнопками
        </Heading>

        <Stack gap={4} p={6}>
          <PrimaryButton onClick={() => alert('Primary clicked!')}>Primary Button</PrimaryButton>
          <SecondaryButton onClick={() => alert('Secondary clicked!')}>
            Secondary Button
          </SecondaryButton>
        </Stack>
      </div>
    </Fragment>
  );
};

export default FactoryPage;
