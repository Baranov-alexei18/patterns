'use client';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Portal,
  CloseButton,
  Dialog,
} from '@chakra-ui/react';
import { useState } from 'react';

interface Pattern {
  category: string;
  name: string;
  short: string;
  details: string;
}

const patterns: Pattern[] = [
  {
    category: 'GoF — Creational',
    name: 'Factory Method',
    short: 'Создание объектов через общий интерфейс.',
    details:
      'Во фронтенде применяется для динамического создания компонентов. Пример: разные кнопки или формы, создаваемые в зависимости от входных данных.',
  },
  {
    category: 'GoF — Structural',
    name: 'Decorator',
    short: 'Добавление поведения без изменения исходного класса.',
    details:
      'Во фронтенде это HOC в React или кастомные хуки. Позволяет переиспользовать логику и расширять функциональность компонентов.',
  },
  {
    category: 'GoF — Behavioral',
    name: 'Observer',
    short: 'Наблюдение за изменениями состояния.',
    details:
      'Основа реактивности во фронтенде. React, Vue, RxJS — все строятся на паттерне Observer.',
  },
  {
    category: 'Современные паттерны',
    name: 'Flux / Redux',
    short: 'Централизованное управление состоянием.',
    details:
      'Позволяет структурировать большие приложения, обеспечивая предсказуемое поведение состояния.',
  },
  {
    category: 'Современные паттерны',
    name: 'Hooks pattern',
    short: 'Повторное использование логики в React.',
    details: 'Позволяет вынести бизнес-логику в хуки и переиспользовать её в разных компонентах.',
  },
  {
    category: 'Современные паттерны',
    name: 'Atomic Design',
    short: 'Системный подход к UI-дизайну.',
    details: 'UI строится как набор атомов → молекул → организмов → шаблонов → страниц.',
  },
  {
    category: 'Современные паттерны',
    name: 'Microfrontends',
    short: 'Декомпозиция монолита на независимые части.',
    details:
      'Позволяет разным командам разрабатывать и деплоить отдельные части фронтенда независимо.',
  },
];

const Home = () => {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);

  return (
    <Box p={10}>
      <Heading mb={6}>Обзор основных паттернов во фронтенде</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {patterns.map((p, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <Card.Root
                border="1px solid"
                borderColor="gray.200"
                _hover={{ shadow: 'lg', cursor: 'pointer' }}
                onClick={() => setSelectedPattern(p)}
              >
                <CardHeader>
                  <Heading size="md">{p.name}</Heading>
                  <Text fontSize="sm" color="gray.500">
                    {p.category}
                  </Text>
                </CardHeader>
                <CardBody>
                  <Text>{p.short}</Text>
                </CardBody>
              </Card.Root>
            </Dialog.Trigger>

            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{selectedPattern?.name}</Dialog.Title>
                  </Dialog.Header>

                  <Dialog.Body>
                    {selectedPattern && (
                      <>
                        <Text fontWeight="bold" mb={2}>
                          Категория: {selectedPattern.category}
                        </Text>
                        <Text>{selectedPattern.details}</Text>
                      </>
                    )}
                  </Dialog.Body>

                  <Dialog.Footer>
                    <Dialog.CloseTrigger />
                  </Dialog.Footer>

                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
