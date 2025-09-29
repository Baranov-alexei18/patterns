'use client';

import { Box, Input, Button, Text, Stack, List, ListItem } from '@chakra-ui/react';
import { Fragment, useState } from 'react';

import { PatternInfo } from '../../components/pattern-info';

type Product = {
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { name: 'Laptop', price: 1200, category: 'electronics' },
  { name: 'Book A', price: 20, category: 'books' },
  { name: 'Book B', price: 15, category: 'books' },
  { name: 'Headphones', price: 200, category: 'electronics' },
  { name: 'Table', price: 300, category: 'furniture' },
];

type FilterExpression = (p: Product) => boolean;

const parseFilter = (input: string): FilterExpression | null => {
  const andParts = input.split(/\s+AND\s+/i);

  const expressions = andParts.map((part) => {
    const match = part.trim().match(/(\w+)\s*(=|>|<)\s*(\w+)/);
    if (!match) return null;

    const [, field, op, value] = match;
    return (p: Product) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fieldValue = (p as any)[field];
      if (typeof fieldValue === 'number') {
        const num = Number(value);
        if (op === '>') return fieldValue > num;
        if (op === '<') return fieldValue < num;
        if (op === '=') return fieldValue === num;
      }
      if (typeof fieldValue === 'string') {
        if (op === '=') return fieldValue === value;
      }
      return false;
    };
  });

  if (expressions.includes(null)) return null;
  return (p: Product) => (expressions as FilterExpression[]).every((fn) => fn(p));
};

export default function InterpreterFilterPage() {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState<Product[]>(products);

  const handleFilter = () => {
    const expr = parseFilter(input);
    if (expr) {
      setFiltered(products.filter(expr));
    } else {
      alert('Неверный фильтр! Пример: "price > 100 AND category = books"');
      setFiltered(products);
    }
  };

  return (
    <Fragment>
      <PatternInfo
        title="Interpreter (Интерпретатор)"
        description="Паттерн Interpreter позволяет определить грамматику языка и интерпретировать выражения этого языка. В фронтенде его используют для фильтров, пользовательских формул и правил."
        advantages={[
          'Чёткая структура кода для интерпретации выражений',
          'Легко добавлять новые правила и операторы',
          'Повышает читаемость при работе с DSL',
        ]}
        disadvantages={['Сложность при больших грамматиках', 'Избыточен для простых случаев']}
        usage={[
          'Фильтры поиска (например: age>18 AND active)',
          'Пользовательские формулы и выражения',
          'Системы правил и валидаций',
          'DSL для UI-конфигураций',
        ]}
      />

      <Box mt={8} maxW="md" mx="auto">
        <Stack gap={4}>
          <Input
            placeholder='Введите фильтр, напр. "price > 100 AND category = books"'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button color="teal" onClick={handleFilter}>
            Применить фильтр
          </Button>
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <Text mb={2} fontWeight="bold">
              Результаты:
            </Text>
            <List.Root gap={2}>
              {filtered.map((p, i) => (
                <ListItem key={i}>
                  {p.name} — ${p.price} [{p.category}]
                </ListItem>
              ))}
              {filtered.length === 0 && <Text color="gray.500">Нет результатов</Text>}
            </List.Root>
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
}
