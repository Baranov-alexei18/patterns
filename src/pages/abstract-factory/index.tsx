'use client';

import { Box, Code, Flex, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

import { DarkFactory } from './dark-factory';
import { LightFactory } from './light-factory.tsx';
import type { UIFactory } from './ui-factory';
import { PatternInfo } from '../../components/pattern-info';

const AbstractFactoryPage = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const factory: UIFactory = theme === 'light' ? new LightFactory() : new DarkFactory();

  return (
    <Fragment>
      <Box p={8}>
        <PatternInfo
          title="Abstract Factory (Абстрактная фабрика)"
          description="Abstract Factory предоставляет интерфейс для создания семейств взаимосвязанных объектов (продуктов) без указания их конкретных классов. Во фронтенде это удобно для темизации, белой маркировки (white-label) и обеспечения совместимости компонентов."
          advantages={[
            "Гарантированная совместимость продуктов в одном семействе (вся 'пакетная' тема согласована).",
            'Централизованное переключение наборов компонентов (тем/брендов).',
            'Удобно для тестирования и подмены реализаций через DI/Context.',
          ]}
          disadvantages={[
            'Сложнее архитектура — больше абстракций и шаблонов кода.',
            'Добавление нового типа продукта требует правок во всех фабриках.',
            'Может быть избыточен для простых приложений с одним вариантом реализации.',
          ]}
          usage={[
            'Темизация UI (Light/Dark/BrandA/BrandB).',
            'White-label / мульти-тенант приложения.',
            'Платформенная адаптация: web vs mobile (совместимые реализации компонентов).',
            'A/B-тесты, где нужна замена целых семейств компонентов.',
          ]}
        />

        <Box mt={8}>
          <Heading size="lg" mb={3}>
            Что это и зачем
          </Heading>
          <Text mb={4} fontSize="md">
            Abstract Factory — это уровень выше обычной фабрики. Если простая фабрика (Factory
            Method) отвечает за создание одного типа объектов (например, HTTP-клиента), то
            абстрактная фабрика создаёт **семейство** связанных объектов (например, Button + Input +
            Modal для одной темы). Клиент получает фабрику и создаёт продукты, не зная конкретных
            классов.
          </Text>

          <Heading size="md" mt={4} mb={2}>
            Ключевые идеи
          </Heading>
          <List.Root gap={2} mb={4}>
            <ListItem>Интерфейс фабрики описывает набор методов/продуктов.</ListItem>
            <ListItem>
              Конкретные фабрики реализуют этот интерфейс и возвращают совместимые реализации.
            </ListItem>
            <ListItem>Клиент работает с фабрикой — он не знает конкретных реализаций.</ListItem>
          </List.Root>

          <Heading size="lg" mb={3}>
            Отличия от простой (обычной) фабрики
          </Heading>
          <Text mb={2}>
            Основное отличие: <b>Factory</b> создаёт один продукт (или выбирает реализацию одного
            типа), а <b>Abstract Factory</b> — целое семейство продуктов, обеспечивая их
            совместимость.
          </Text>

          <Box mt={4} mb={6}>
            <Code display="block" whiteSpace="pre-wrap" p={4}>
              {`// Factory: createHttpClient(env) => FetchClient | MockClient
// AbstractFactory: createUIFactory(theme) => { Button, Input, Modal }`}
            </Code>
          </Box>

          <Heading size="lg" mb={3}>
            Когда использовать
          </Heading>
          <List.Root gap={2} mb={4}>
            <ListItem>
              Когда приложение должно поддерживать несколько «семейств» компонентов (темы, бренды),
              и важно, чтобы все продукты в наборе были совместимы между собой.
            </ListItem>
            <ListItem>
              Если нужна централизованная замена набора реализаций в рантайме (переключение темы).
            </ListItem>
            <ListItem>
              Если вы делаете white-label продукт для нескольких клиентов и хотите гарантировать
              единообразие.
            </ListItem>
          </List.Root>

          <Heading size="lg" mb={3}>
            Минусы и подводные камни
          </Heading>
          <List.Root gap={2} mb={4}>
            <ListItem>
              Если расширить интерфейс фабрики (добавить ещё продукт), нужно изменить все фабрики.
            </ListItem>
            <ListItem>
              Слишком ранняя абстракция — частая ошибка. Не вводите фабрики, пока не появилась
              реальная потребность.
            </ListItem>
            <ListItem>Не забывайте о тестируемости: используйте MockFactory в тестах.</ListItem>
          </List.Root>

          <Heading size="lg" mb={3}>
            Практическая реализация — варианты
          </Heading>
          <Text>Есть два удобных подхода во фронтенде:</Text>
          <List.Root gap={2} mb={4}>
            <ListItem>
              <b>Фабрика возвращает React-элементы</b> — фабрика сама рендерит элементы (return
              &lt;button&gt;). Просто, но менее гибко при передаче children/props.
            </ListItem>
            <ListItem>
              <b>Фабрика возвращает компоненты (React.ComponentType)</b> — более гибко: клиент может
              рендерить компонент и передавать children/props как обычно. В этом примере мы
              используем этот подход.
            </ListItem>
          </List.Root>
        </Box>

        <Box style={{ padding: '20px' }}>
          <Heading>Abstract Factory Example</Heading>
          <p>
            Паттерн <b>Abstract Factory</b> позволяет создавать целые семейства объектов (кнопки,
            инпуты и т.п.), не привязываясь к конкретным их реализациям.
          </p>

          <div style={{ margin: '20px 0' }}>
            <button onClick={() => setTheme('light')}>Light Theme</button>
            <button onClick={() => setTheme('dark')} style={{ marginLeft: '10px' }}>
              Dark Theme
            </button>
          </div>

          <Flex gap={12} align="center" justify="center">
            {factory.createButton('Нажми меня', () => alert('Кнопка нажата!'))}
            <br />
            {factory.createInput('Введите текст...')}
          </Flex>
        </Box>
      </Box>
    </Fragment>
  );
};

export default AbstractFactoryPage;
