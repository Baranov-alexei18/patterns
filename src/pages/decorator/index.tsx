/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Heading, Stack, Button } from '@chakra-ui/react';
import { Fragment } from 'react';

import { PatternInfo } from '../../components/pattern-info';

const SimpleButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Button color="black" onClick={onClick}>
    {children}
  </Button>
);

// Декоратор
const withLogger = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const handleClick = () => {
      console.log('📌 Кнопка была нажата!');
      props.onClick?.();
    };

    return <Component {...props} onClick={handleClick} />;
  };
};

// HOC элемент
const LoggingButton = withLogger(SimpleButton);

const DecoratorPage = () => {
  return (
    <Fragment>
      <PatternInfo
        title="Decorator (Декоратор)"
        description="Паттерн Decorator позволяет динамически добавлять объектам новое поведение, не изменяя их код. В React часто реализуется через HOC (Higher-Order Components) или wrapper-компоненты."
        advantages={[
          'Позволяет расширять функциональность без изменения исходного кода',
          'Можно накладывать несколько декораторов',
          'Следует принципу открытости/закрытости (OCP)',
          'Удобен для кросс-срезных задач (логирование, аналитика, авторизация)',
        ]}
        disadvantages={[
          'Может усложнить архитектуру из-за множества вложенных обёрток',
          'Сложнее отлаживать (много уровней вызовов)',
          'При неправильном использовании может превратиться в «спагетти»',
        ]}
        usage={[
          'HOC в React (`withRouter`, `connect` из Redux, `withAuth`)',
          'Стилизация (`styled-components`, `emotion`)',
          'Логирование и аналитика (Sentry, GA)',
          'Добавление тултипов, иконок и других UI-расширений',
          'Расширение API-клиентов (например, retry, кэширование)',
        ]}
      />

      <div>
        <Heading size="lg" mb={4} mt={12} color="black.600">
          Декоратор - логирования. Пример с кнопкой
        </Heading>

        <Stack gap={4} p={6}>
          <SimpleButton onClick={() => alert('Обычная кнопка')}>Обычная кнопка</SimpleButton>

          <LoggingButton onClick={() => alert('Декорированная кнопка')}>
            Кнопка с логированием
          </LoggingButton>
        </Stack>
      </div>
    </Fragment>
  );
};

export default DecoratorPage;
