'use client';

import { Heading, Stack } from '@chakra-ui/react';
import { Fragment } from 'react/jsx-runtime';

import { UIButton } from './ui/button';
import { createButtonBuilder } from './ui/button-config';
import { PatternInfo } from '../../components/pattern-info';

const BuilderPage = () => {
  const buttonConfig = createButtonBuilder()
    .setLabel('Builder Pattern Button')
    .setColor('teal')
    .setSize('large')
    .setOnClick(() => alert('Builder style!'))
    .build();

  return (
    <Fragment>
      <PatternInfo
        title="Builder (Строитель)"
        description="Паттерн Builder (Строитель) используется для пошагового создания сложных объектов. Он отделяет процесс конструирования объекта от его представления, что позволяет гибко собирать разные варианты одного и того же объекта."
        advantages={[
          'Упрощает создание сложных объектов с множеством параметров',
          'Позволяет собирать разные варианты одного объекта',
          'Код становится более читаемым (методы setName, setEmail и т.п.)',
          'Шаги построения можно переиспользовать в разных контекстах',
        ]}
        disadvantages={[
          'Код становится более многословным (нужно больше классов/методов)',
          'Избыточен, если объект простой',
        ]}
        usage={[
          'Создание сложных UI-компонентов (модалки, карточки, таблицы)',
          'Построение форм или фильтров по шагам',
          'Конфигурирование HTTP-запросов (headers, retries, timeout)',
          'Генерация DTO объектов перед отправкой на сервер',
        ]}
      />

      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Пример с UI-кнопкой, собранная по паттерну Builder
        </Heading>

        <Stack gap={4} p={6}>
          <UIButton {...buttonConfig} />
        </Stack>
      </div>
    </Fragment>
  );
};

export default BuilderPage;
